import { AnimatePresence, AnimatePresenceProps } from "framer-motion";
import { ComponentProps } from "react";

import Portal from ".";

interface AnimatePortalProps
  extends Omit<ComponentProps<typeof Portal>, "elementId"> {
  /**
   * children 렌더링 여부
   */
  isVisible: boolean;
  /**
   * framer-motion AnimatePresenceProps의 mode
   *
   * 'sync'      : children 추가/제거되는 즉시 애니메이션을 적용/해제합니다
   * 'wait'      : 들어오는 children은 나가는 children 애니메이션이 종료될 때까지 기다립니다
   * 'popLayout' : 종료되는 children은 페이지 레이아웃에서 '팝업'됩니다. 주변 요소가 즉시 새 레이아웃으로 이동할 수 있습니다
   *
   * @default 'wait'
   */
  mode?: AnimatePresenceProps["mode"];
}

/**
 * React 트리에서 제거된 component에 애니메이션을 적용하는 AnimatePresence와 Portal을 같이 사용합니다
 */
export default function AnimatePortal({
  isVisible,
  mode = "wait",
  children,
}: AnimatePortalProps) {
  return (
    <Portal elementId="modal-root">
      <AnimatePresence mode={mode}>{isVisible && children}</AnimatePresence>
    </Portal>
  );
}
