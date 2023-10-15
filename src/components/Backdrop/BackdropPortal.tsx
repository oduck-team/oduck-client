import Portal from "../Portal";

import { Backdrop } from "./BackropPortal.style";

interface AnimationBackdropPortalProps {
  onClick: () => void;
}

export default function BackdropPortal({
  onClick,
}: AnimationBackdropPortalProps) {
  return (
    <Portal>
      <Backdrop onClick={onClick} />
    </Portal>
  );
}
