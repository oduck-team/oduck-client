import { StrictPropsWithChildren } from "@/types";

import { Container } from "./style";

type Direction = "row" | "col";

export interface ModalActionsProps {
  direction?: Direction; // 정렬 방향
}

export default function ModalActions({
  direction = "row",
  children,
}: StrictPropsWithChildren<ModalActionsProps>) {
  return <Container direction={direction}>{children}</Container>;
}
