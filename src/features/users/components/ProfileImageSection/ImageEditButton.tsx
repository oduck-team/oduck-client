import { PlusCircle, XCircle } from "@phosphor-icons/react";

import { StrictPropsWithChildren } from "@/types";

import {
  ImageEditButtonContainer,
  IconContainer,
  XButton,
} from "./ProfileArtEditButton.style";

interface ImageEditButtonProps {
  croppedImage: string | null;
  borderRadius?: "50%" | "none";
  onClick: () => void;
  onReset: () => void;
}

export default function ImageEditButton({
  croppedImage,
  borderRadius = "none",
  onClick,
  onReset,
  children,
}: StrictPropsWithChildren<ImageEditButtonProps>) {
  return (
    <ImageEditButtonContainer onClick={onClick} borderRadius={borderRadius}>
      <IconContainer hasXButton={Boolean(croppedImage)}>
        <PlusCircle size={24} color="white" />
        {croppedImage && (
          <XButton
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onReset();
            }}
          >
            <XCircle size={24} />
          </XButton>
        )}
      </IconContainer>
      {children}
    </ImageEditButtonContainer>
  );
}
