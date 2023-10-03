import { StrictPropsWithChildren } from "@/types";

import HeaderCenterSection from "./HeaderCenterSection";
import HeaderLeftSection from "./HeaderLeftSection";
import HeaderRightSection from "./HeaderRightSection";
import { HeaderContainer, Contents } from "./style";

/**
 * 공통 헤더 컴포넌트입니다
 * Left, Center, Right를 조합하여 사용합니다
 */
export default function Header({ children }: StrictPropsWithChildren) {
  return (
    <HeaderContainer>
      <Contents>{children}</Contents>
    </HeaderContainer>
  );
}

Header.Left = HeaderLeftSection;
Header.Center = HeaderCenterSection;
Header.Right = HeaderRightSection;
