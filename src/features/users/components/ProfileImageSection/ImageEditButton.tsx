import { StrictPropsWithChildren } from "@/types";

import {
  ImageEditButtonContainer,
  PlusCircleIcon,
} from "./ImageEditButton.style";

interface ImageEditButtonProps {
  croppedImage: string | null;
  borderRadius?: "50%" | "none";
  /** default height: 100%, number는 px 단위 */
  height?: "100%" | number;
  onClick: () => void;
  onReset: () => void;
}

export default function ImageEditButton({
  croppedImage,
  borderRadius = "none",
  height = "100%",
  onClick,
  onReset,
  children,
}: StrictPropsWithChildren<ImageEditButtonProps>) {
  /* crop된 이미지가 있으면 이미지 제거, 없으면 이미지 등록 */
  const handleClick = croppedImage ? onReset : onClick;

  return (
    <ImageEditButtonContainer
      onClick={handleClick}
      borderRadius={borderRadius}
      height={height}
    >
      <PlusCircleIcon
        className={croppedImage ? "resetIcon" : undefined}
        size={24}
      />

      {children}
    </ImageEditButtonContainer>
  );
}
