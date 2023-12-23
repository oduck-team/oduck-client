import { useState } from "react";

import { readFile } from "@/libs/imageCrop";

export default function useCropModal(
  inputRef: React.RefObject<HTMLInputElement>,
) {
  const [isImageCropModal, setIsImageCropModal] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null); // 사용자의 원본 이미지

  const handleImageEditClick = () => {
    setIsImageCropModal(true);
    if (!imageSrc) inputRef.current?.click(); // 이미지 input open
  };

  const closeImageCropModal = () => {
    setIsImageCropModal(false);
    resetUploadedImage();
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
    }
  };

  /**
   * 이미지 crop을 취소하거나 완료하면
   * input과 원본 이미지 상태 초기화
   */
  const resetUploadedImage = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      setImageSrc(null);
    }
  };

  return {
    imageSrc,
    isImageCropModal,
    handleImageEditClick,
    handleImageChange,
    closeImageCropModal,
    resetUploadedImage,
  };
}
