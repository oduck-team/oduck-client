// theme 테스트 라우트입니다.

import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const Heading1 = styled.h1`
  ${props => props.theme.heading1};
  color: ${props => props.color || props.theme.colors.blue['60']};
`;

export default function Style() {
  const theme = useTheme();
  return (
    <div>
      <Heading1>Heading1, blue-60 변수 전달 테스트입니다.</Heading1>
      <Heading1 color={theme.colors.red['50']}>color 프랍에 따라 다른 컬러로도 지정 가능합니다.</Heading1>
      <Heading1 color={theme.colors.yellow['50']}>코드 재활용을 높혔습니다.</Heading1>
      <Heading1 color={theme.colors.neutral['50']}>neutral 50</Heading1>
    </div>);
}
