import { StrictPropsWithChildren } from "@/types";

import {
  AvatarEditButtonContainer,
  PlusCircleIcon,
} from "./AvatarEditButton.style";

interface AvatarEditButtonProps {
  onClick: () => void;
}

export default function AvatarEditButton({
  onClick,
  children,
}: StrictPropsWithChildren<AvatarEditButtonProps>) {
  return (
    <AvatarEditButtonContainer onClick={onClick}>
      <PlusCircleIcon size={24} color="white" />
      {children}
    </AvatarEditButtonContainer>
  );
}
