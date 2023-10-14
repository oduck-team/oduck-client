import { useAnimation, useDragControls, PanInfo } from "framer-motion";
import { useState, useRef, useEffect } from "react";

import useWindowSize from "@/hooks/useWindowSize";

const HANDLEBAR_HEIGHT = 30;
const DEFAULT_MARGIN = 50; // container의 뷰포트 최상단으로부터 마진

export default function useBottomSheet(
  isVisible: boolean,
  onClose: () => void,
) {
  const animationControls = useAnimation();
  const dragControls = useDragControls();
  const [height, setHeight] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { height: windowHeight } = useWindowSize(1000);

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
  }, [isVisible, windowHeight]);

  return {
    animationControls,
    dragControls,
    height,
    containerRef,
    handleDrag,
    handleDragEnd,
  };
}
