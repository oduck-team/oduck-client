import { useRef, useState } from "react";

import { readFile } from "@/libs/imageCrop";

export default function useArtCrop() {
  const artRef = useRef<HTMLInputElement>(null); // 배경 이미지 input
  const [isArtCropModal, setIsArtCropModal] = useState(false);
  const [artSrc, setArtSrc] = useState<string | null>(null); // 사용자의 원본 배경 이미지

  const handleArtEditClick = () => {
    setIsArtCropModal(true);
    if (!artSrc) artRef.current?.click(); // 배경 이미지 input open
  };

  const closeArtCropModal = () => {
    setIsArtCropModal(false);
  };

  const handleArtImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageDataUrl = await readFile(file);
      setArtSrc(imageDataUrl);
    }
  };

  return {
    artRef,
    artSrc,
    isArtCropModal,
    handleArtEditClick,
    handleArtImageChange,
    closeArtCropModal,
  };
}
