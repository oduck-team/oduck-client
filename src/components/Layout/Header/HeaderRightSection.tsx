import { PropsWithChildren } from "react";

import { HeaderRightSectionContainer } from "./HeaderRightSection.style";

export default function HeaderRightSection({
  children,
  ...props
}: PropsWithChildren) {
  return (
    <HeaderRightSectionContainer {...props}>
      {children}
    </HeaderRightSectionContainer>
  );
}
