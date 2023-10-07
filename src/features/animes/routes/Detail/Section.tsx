import { StrictPropsWithChildren } from "@/types";

import { SectionContainer } from "./Section.style";

/**
 * 애니 상세페이지에서 각 영역을 나눠주는 섹션 컴포넌트입니다
 */
export default function Section({ children }: StrictPropsWithChildren) {
  return <SectionContainer>{children}</SectionContainer>;
}
