import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { ButtonContainer as BaseButton } from "@/components/Button/style";

export const NotFoundContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 0 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorImage = styled.img`
  height: 110px;
  width: 100%;
`;

export const Message = styled.h1`
  ${({ theme }) => theme.typo["body-1-r"]}
  color: ${({ theme }) => theme.colors.neutral["50"]};
  margin: 16px 0;
`;

const StyledButton = styled(BaseButton)`
  padding: 0 40px;
`;

export const HomeButton = StyledButton.withComponent(Link);
