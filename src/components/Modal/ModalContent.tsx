import { StrictPropsWithChildren } from "@/types";

import { ModalContentContainer } from "./ModalContent.style";

/**
 * @description 모달에 들어갈 컨텐츠
 */
export default function ModalContent({ children }: StrictPropsWithChildren) {
  return <ModalContentContainer>{children}</ModalContentContainer>;
}
