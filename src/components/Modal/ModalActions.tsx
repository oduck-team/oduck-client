import { StrictPropsWithChildren } from "@/types";

import { ModalActionsContainer } from "./ModalActions.style";

type Direction = "row" | "col";

export interface ModalActionsProps {
  /**
   * 정렬 방향
   * @default row
   */
  direction?: Direction;
}

/**
 * @description 모달에 들어갈 액션들. 확인, 닫기 버튼 등
 */
export default function ModalActions({
  direction = "row",
  children,
}: StrictPropsWithChildren<ModalActionsProps>) {
  return (
    <ModalActionsContainer direction={direction}>
      {children}
    </ModalActionsContainer>
  );
}
