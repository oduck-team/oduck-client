import { StrictPropsWithChildren } from "@/types";

import { Container } from "./style";

export default function ModalContent({ children }: StrictPropsWithChildren) {
  return <Container>{children}</Container>;
}
