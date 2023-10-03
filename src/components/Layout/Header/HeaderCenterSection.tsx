import { ComponentProps, PropsWithChildren } from "react";

import { HeaderCenterSectionContainer } from "./HeaderCenterSection.style";

export default function HeaderCenterSection({
  children,
  ...props
}: PropsWithChildren<ComponentProps<"div">>) {
  return (
    <HeaderCenterSectionContainer {...props}>
      {children}
    </HeaderCenterSectionContainer>
  );
}
