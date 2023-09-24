import { PanInfo, useAnimation, useDragControls } from "framer-motion";
import {
  Children,
  ReactNode,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";

import useWindowSize from "@/hooks/useWindowSize";
import { StrictPropsWithChildren } from "@/types";

import AnimatePortal from "../Portal/AnimatePortal";

import {
  Backdrop,
  Container,
  Content,
  Footer,
  Handlebar,
  Scroll,
} from "./style";

const HANDLEBAR_HEIGHT = 30;
const DEFAULT_MARGIN = 50; // container의 뷰포트 최상단으로부터 마진

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
  const animationControls = useAnimation();
  const dragControls = useDragControls(); // drag 이벤트 일어나는 시점을 지정
  const [height, setHeight] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { height: windowHeight } = useWindowSize();

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

  // 위로 드래그시 bottom sheet 이동 방지
  const handleDrag = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.delta.y < 0 || info.point.y < 0) animationControls.set({ y: 0 });
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const DRAG_SPEED_THRESHOLD = 1000; // 드래그 속도 임계값
    const DRAG_DISTANCE_THRESHOLD = 50; // 드래그 거리 임계값. 값이 크면 android에서 반응을 못함

    const shouldClose =
      info.velocity.y > DRAG_SPEED_THRESHOLD ||
      (info.velocity.y >= 0 && info.point.y > DRAG_DISTANCE_THRESHOLD);

    if (shouldClose) {
      animationControls.start("hidden");
      onClose();
    } else {
      animationControls.start("visible");
    }
  };

  useEffect(() => {
    if (isVisible) {
      animationControls.start("visible");
    } else {
      animationControls.start("hidden");
    }
  }, [isVisible, animationControls]);

  // bottom sheet 첫 등장시, view port 최상단을 넘어가지 않도록 합니다
  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    const contentHeight = containerRef.current.offsetHeight;
    const thresholdHeight = windowHeight! - DEFAULT_MARGIN - HANDLEBAR_HEIGHT;

    if (contentHeight > thresholdHeight) {
      setHeight(thresholdHeight);
    } else {
      setHeight(contentHeight);
    }
  }, [isVisible]);

  // 모바일 pull to refresh를 막아줍니다.
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 200);
    }
  }, [isVisible]);

  return (
    <AnimatePortal isVisible={isVisible}>
      <Backdrop isVisible={showBackdrop} onClick={onClose} />
      <Container
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
      </Container>
    </AnimatePortal>
  );
}

BottomSheet.Content = Content;
BottomSheet.Footer = Footer;
