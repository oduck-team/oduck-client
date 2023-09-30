import { Children, ReactNode, isValidElement } from "react";

import { StrictPropsWithChildren } from "@/types";

import AnimatePortal from "../Portal/AnimatePortal";

import {
  Backdrop,
  BottomSheetContainer,
  Content,
  Footer,
  Handlebar,
  Scroll,
} from "./style";
import useBottomSheet from "./useBottomSheet";

interface BottomSheetProps {
  showBackdrop?: boolean;
  isVisible?: boolean;
  onClose: () => void;
}

export default function BottomSheet({
  isVisible = false,
  showBackdrop = true,
  onClose,
  children,
}: StrictPropsWithChildren<BottomSheetProps>) {
  const {
    animationControls,
    dragControls,
    height,
    containerRef,
    handleDrag,
    handleDragEnd,
  } = useBottomSheet(isVisible, onClose);

  let Footer: ReactNode | null;
  // children 컴포넌트 중 Footer 컴포넌트를 찾습니다
  // 나머지 children 컴포넌트는 RestChildren에 저장합니다
  const RestChildren = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === BottomSheet.Footer) {
      Footer = child;
      return null;
    }

    return child;
  });

  return (
    <AnimatePortal isVisible={isVisible}>
      <Backdrop isVisible={showBackdrop} onClick={onClose} />
      <BottomSheetContainer
        ref={containerRef}
        aria-modal={isVisible}
        role="dialog"
        maxHeight={height}
        // animation
        animate={animationControls}
        initial="hidden"
        variants={{
          hidden: {
            y: "100%",
            translateX: "-50%",
            left: "50%",
          },
          visible: {
            y: 0,
            translateX: "-50%",
            left: "50%",
          },
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        // drag
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragListener={false}
        dragControls={dragControls}
        dragElastic={0.2} // 외부 제약을 허용하는 조건(제약 범위를 벗어날수록 돌아가려는 움직임의 정도)
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        onClick={(e) => e.stopPropagation()}
      >
        <Handlebar
          aria-label="핸들바"
          tabIndex={0}
          onPointerDown={(e) => dragControls.start(e)}
        />
        <Scroll>{RestChildren}</Scroll>
        {Footer}
      </BottomSheetContainer>
    </AnimatePortal>
  );
}

BottomSheet.Content = Content;
BottomSheet.Footer = Footer;
