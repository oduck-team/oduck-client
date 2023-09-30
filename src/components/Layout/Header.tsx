import { StrictPropsWithChildren } from "@/types";

import { Center, HeaderContainer, Contents, Left, Right } from "./Header.style";

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

Header.Left = Left;
Header.Center = Center;
Header.Right = Right;
