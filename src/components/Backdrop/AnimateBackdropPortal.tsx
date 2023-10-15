import Portal from "../Portal";

import { Backdrop } from "./AnimateBackropPortal.style";

interface AnimationBackdropPortalProps {
  onClick: () => void;
}

export default function AnimateBackdropPortal({
  onClick,
}: AnimationBackdropPortalProps) {
  return (
    <Portal>
      <Backdrop onClick={onClick} />
    </Portal>
  );
}
