import Compressor from "compressorjs";

/**
 * 파일을 webP 포멧으로 변환합니다
 * @param {File} file - 이미지 파일
 * @param {number} quality - 변환후 이미지 품질 `기본 0.8` `0 ~ 8 사이 값`
 * @returns {Promise<File>}
 */
export async function fileToWebPFile(
  file: File,
  quality: number = 0.8,
): Promise<File> {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality,
      mimeType: "image/webp",
      maxWidth: 880,
      height: 620,
      success(result) {
        const webPFile = new File([result], file.name, {
          type: "image/webp",
        });
        resolve(webPFile);
      },
      error(err: Error) {
        console.error(err.message);
        reject(err);
      },
    });
  });
}
