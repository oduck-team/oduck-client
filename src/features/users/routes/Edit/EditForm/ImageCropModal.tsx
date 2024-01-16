import { useState } from "react";
import Cropper, { Area } from "react-easy-crop";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { dataURLtoFile, getCroppedImg } from "@/libs/imageCrop";

import {
  ContentContainer,
  CropperContainer,
  Information,
  RangeInput,
} from "./ImageCropModal.style";

interface ImageCropModalProps {
  imageSrc: string;
  aspectWidth: number; // 이미지 가로 비율
  aspectHeight: number; // 이미지 세로 비율
  filename: string;
  cropShape?: "rect" | "round"; // crop 사각형 또는 원
  /** file input과 원본 이미지 상태를 초기화 */
  resetImage: () => void;
  onClose: () => void;
  onSaveCroppedImage: (file: File) => void;
}

export default function ImageCropModal({
  imageSrc,
  aspectWidth,
  aspectHeight,
  filename,
  cropShape = "rect",
  resetImage,
  onClose,
  onSaveCroppedImage,
}: ImageCropModalProps) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();

  const onCropComplete = (_: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const saveCroppedImage = async () => {
    try {
      if (!imageSrc || !croppedAreaPixels) return;

      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      if (croppedImage) {
        const file = dataURLtoFile(croppedImage, `${filename}.jpeg`);
        onSaveCroppedImage(file);
      }
    } catch (e) {
      console.error(e);
    } finally {
      resetImage(); // file input과 원본 이미지 상태를 초기화
    }
  };

  return (
    <Modal onClose={onClose}>
      <Modal.Content>
        <ContentContainer>
          <CropperContainer>
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={aspectWidth / aspectHeight}
              cropShape={cropShape}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </CropperContainer>
          <RangeInput
            type="range"
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setZoom(Number(e.target.value))
            }
          />
          <Information>이미지 저장은 아직 지원되지 않습니다.</Information>
        </ContentContainer>
      </Modal.Content>
      <Modal.Actions>
        <Button
          variant="text"
          name="취소"
          color="neutral"
          isBlock
          onClick={onClose}
        >
          취소
        </Button>
        <Button
          variant="solid"
          name="완료"
          color="primary"
          isBlock
          onClick={saveCroppedImage}
        >
          완료
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
