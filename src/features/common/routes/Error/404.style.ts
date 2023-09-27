import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { Container as Button } from "@/components/Button/style";

export const Container = styled.main`
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
  ${({ theme }) => theme.typo["heading-2"]}
  margin: 16px 0;
`;

export const HomeButton = Button.withComponent(Link);
