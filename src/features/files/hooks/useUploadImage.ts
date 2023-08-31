import { useState } from "react";

import { uploadImage } from "../apis/uploadImage";

export function useUploadImage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleUploadImage = async (
    path: string,
    filename: string,
    file: File,
  ) => {
    setIsLoading(true);
    try {
      const success = await uploadImage(path, filename, file);

      if (success) {
        return `https://cdn.oduck.io/static/${path}/${filename}`;
      }
    } catch (error) {
      console.error("파일 업로드 중 에러 :", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleUploadImage, isLoading };
}
