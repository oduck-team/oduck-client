import { StrictPropsWithChildren } from "@/types";

import {
  ArtEditButtonContainer,
  PlusCircleIcon,
} from "./ProfileArtEditButton.style";

interface ArtEditButtonProps {
  onClick: () => void;
}

export default function ArtEditButton({
  onClick,
  children,
}: StrictPropsWithChildren<ArtEditButtonProps>) {
  return (
    <ArtEditButtonContainer onClick={onClick}>
      <PlusCircleIcon size={24} color="white" />
      {children}
    </ArtEditButtonContainer>
  );
}
