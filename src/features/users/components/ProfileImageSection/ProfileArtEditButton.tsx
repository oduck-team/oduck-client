import { PlusCircle, XCircle } from "@phosphor-icons/react";

import { StrictPropsWithChildren } from "@/types";

import {
  ArtEditButtonContainer,
  IconContainer,
  XButton,
} from "./ProfileArtEditButton.style";

interface ArtEditButtonProps {
  croppedImage: string | null;
  onClick: () => void;
  onReset: () => void;
}

export default function ArtEditButton({
  croppedImage,
  onClick,
  onReset,
  children,
}: StrictPropsWithChildren<ArtEditButtonProps>) {
  return (
    <ArtEditButtonContainer onClick={onClick}>
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
    </ArtEditButtonContainer>
  );
}
