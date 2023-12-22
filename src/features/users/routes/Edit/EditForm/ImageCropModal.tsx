import { useState } from "react";
import Cropper, { Area } from "react-easy-crop";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { dataURLtoFile, getCroppedImg } from "@/libs/imageCrop";

import {
  ContentContainer,
  CropperContainer,
  RangeInput,
} from "./ImageCropModal.style";

interface ImageCropModalProps {
  imageSrc: string;
  onClose: () => void;
  onSaveCroppedImage: (file: File) => void;
}

export default function ImageCropModal({
  imageSrc,
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
        const file = dataURLtoFile(croppedImage, "background.jpeg");
        onSaveCroppedImage(file);
      }
    } catch (e) {
      console.error(e);
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
              aspect={2 / 1}
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
