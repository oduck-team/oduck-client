import { useState } from "react";

export type Side = "top" | "right" | "bottom" | "left";

export function useDrawer(side: Side, onClose: () => void) {
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setCurrentX(e.touches[0].clientX);
    setCurrentY(e.touches[0].clientY);
  };

  /**
   * @description 사용자의 터치 방향으로 Drawer 닫기 여부를 정합니다.
   */
  const handleTouchEnd = () => {
    const diffX = currentX - startX;
    const diffY = currentY - startY;

    let shouldClose = false;

    switch (side) {
      case "right":
        shouldClose = diffX > 50;
        break;
      case "left":
        shouldClose = diffX < -50;
        break;
      case "top":
        shouldClose = diffY < -50;
        break;
      case "bottom":
        shouldClose = diffY > 50;
        break;
      default:
        break;
    }

    if (shouldClose) {
      onClose();
    }

    setStartX(0);
    setCurrentX(0);
    setStartY(0);
    setCurrentY(0);
  };

  return { handleTouchStart, handleTouchMove, handleTouchEnd };
}
