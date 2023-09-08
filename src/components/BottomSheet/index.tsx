import { AnimatePresence, useAnimation, useDragControls } from "framer-motion";
import { useEffect, useRef } from "react";

import { useScrollLock } from "@/hooks/useScrollLock";
import { StrictPropsWithChildren } from "@/types";

import Portal from "../Portal";

import {
  Backdrop,
  Container,
  Handlebar,
  ContentContainer,
  Content,
  Footer,
} from "./style";

const HANDLEBAR_HEIGHT = 30;
const FOOTER_HEGIHT = 80;

BottomSheet.Content = Content;
BottomSheet.Footer = Footer;

interface BottomSheetProps {
  showBackdrop?: boolean;
  isOpen?: boolean;
  onClose: () => void;
}

export default function BottomSheet({
  isOpen = false,
  showBackdrop = true,
  onClose,
  children,
}: StrictPropsWithChildren<BottomSheetProps>) {
  useScrollLock(isOpen);
  const controls = useAnimation();
  const dragControls = useDragControls(); // drag 이벤트 일어나는 시점을 지정
  const contentContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && contentContainerRef.current) {
      const contentHeight = contentContainerRef.current.offsetHeight;

      // BottomSheet 컴포넌트가 화면에 보여질 때 실제 높이입니다.
      // Content 높이, Handlebar 높이, Footer 높이를 합한 값과
      // 화면 높이에서 50을 뺀 값 중 작은 것을 선택하여 화면 최상단을 넘어가지 않게합니다.
      const visibleHeight = Math.min(
        contentHeight + HANDLEBAR_HEIGHT + FOOTER_HEGIHT,
        window.innerHeight - 50,
      );

      const topValue = `calc(100dvh - ${visibleHeight}px)`;
      controls.start({ top: topValue, bottom: 0 });
    } else {
      controls.start("hidden");
    }
  }, [isOpen, controls]);

  // 모바일 pull to refresh를 막아줍니다.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Portal elementId="modal-root">
          <Backdrop isVisible={showBackdrop} onClick={() => {}}>
            <Container
              aria-modal={isOpen}
              role="dialog"
              initial={{ top: "100dvh" }}
              animate={controls}
              exit={{ top: "100dvh" }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragControls={dragControls}
              dragListener={false}
              dragElastic={0.2} // 외부 제약을 허용하는 조건(제약 범위를 벗어날수록 돌아가려는 움직임의 정도)
              onDragEnd={(_, info) => {
                const DRAG_SPEED_THRESHOLD = 1000; // 드래그 속도 임계값
                const DRAG_DISTANCE_THRESHOLD = 50; // 드래그 거리 임계값. 값이 크면 android에서 반응을 못함

                const shouldClose =
                  info.velocity.y > DRAG_SPEED_THRESHOLD ||
                  (info.velocity.y >= 0 &&
                    info.point.y > DRAG_DISTANCE_THRESHOLD);

                if (shouldClose) {
                  controls.start("hidden");
                  onClose();
                } else {
                  controls.start("visible");
                }
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Handlebar
                aria-label="핸들바"
                tabIndex={0}
                onPointerDown={(e) => dragControls.start(e)}
              />
              <ContentContainer ref={contentContainerRef}>
                {children}
              </ContentContainer>
            </Container>
          </Backdrop>
        </Portal>
      )}
    </AnimatePresence>
  );
}
