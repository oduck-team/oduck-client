import { useState } from "react";

import { uploadImage } from "../apis/uploadImage";

export function useUploadImage() {
  const [isUploadImageLoading, setIsUploadImageLoading] = useState(false);

  const handleUploadImage = async ({
    path,
    filename,
    file,
  }: {
    path: string;
    filename: string;
    file: File;
  }) => {
    setIsUploadImageLoading(true);
    try {
      const success = await uploadImage(path, filename, file);

      if (success) {
        return `/${path}/${filename}`;
      }
    } catch (error) {
      console.error("파일 업로드 중 에러 :", error);
    } finally {
      setIsUploadImageLoading(false);
    }
  };

  return { handleUploadImage, isUploadImageLoading };
}
