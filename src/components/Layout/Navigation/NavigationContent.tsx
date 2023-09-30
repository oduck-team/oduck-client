import { StrictPropsWithChildren } from "@/types";

import { NavigationContentContainer } from "./NavigationContent.style";

export default function NavigationContent({
  children,
}: StrictPropsWithChildren) {
  return <NavigationContentContainer>{children}</NavigationContentContainer>;
}
