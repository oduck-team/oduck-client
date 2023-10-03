import { PropsWithChildren } from "react";

import { HeaderLeftSectionContainer } from "./HeaderLeftSection.style";

export default function HeaderLeftSection({
  children,
  ...props
}: PropsWithChildren) {
  return (
    <HeaderLeftSectionContainer {...props}>
      {children}
    </HeaderLeftSectionContainer>
  );
}
