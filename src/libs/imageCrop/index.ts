import { Area } from "react-easy-crop";

/**
 * 이미지를 crop하기 위해, 업로드 한 이미지를 읽어 화면에 보여줍니다.
 */
export function readFile(file: Blob): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => resolve(reader.result as string),
      false,
    );
    reader.readAsDataURL(file);
  });
}

/**
 * @see {@link https://github.com/ValentinH/react-easy-crop/blob/main/docs/src/components/Demo/cropImage.ts}
 * @desc 이미지 crop 결과를 생성
 * @retrun base64 string 또는 blob
 */
export async function getCroppedImg(
  imageSrc: string,
  pixelCrop: Area,
): Promise<string | null> {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return null;
  }

  // set canvas size to match the bounding box
  canvas.width = image.width;
  canvas.height = image.height;

  // draw image
  ctx.drawImage(image, 0, 0);

  // croppedAreaPixels values are bounding box relative
  // extract the cropped image using these values
  const data = ctx.getImageData(
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
  );

  // set canvas width to final desired crop size - this will clear existing context
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  // paste generated rotate image at the top left corner
  ctx.putImageData(data, 0, 0);

  // As Base64 string
  return canvas.toDataURL("image/jpeg");

  // As a blob
  // return new Promise((resolve) => {
  //   croppedCanvas.toBlob((file) => {
  //     if (file) resolve(URL.createObjectURL(file));
  //   }, "image/jpeg");
  // });
}

/**
 * base64 image data를 File 객체로 변환
 */
export function dataURLtoFile(dataurl: string, fileName: string) {
  const arr = dataurl.split(",");
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  const mimeMatch = arr[0].match(/:(.*?);/);
  let mime; // file type

  if (mimeMatch) mime = mimeMatch[1];

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], fileName, { type: mime ?? "image/jpeg" });
}

/**
 * 업로드한 이미지의 element 생성
 */
const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox
    image.src = url;
  });
