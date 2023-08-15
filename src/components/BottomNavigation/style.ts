import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 0;
  width: 100%;
  height: 62px;
  background-color: white;

  & > h1 {
    display: none;
  }

  & > ul {
    display: flex;
    flex: 1;
    max-width: 600px;
    padding: 0 1rem;

    & > li {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background-color 0.2s;

      ${({ theme }) => css`
        :active {
          background-color: ${theme.colors.neutral["10"]};
        }
      `}
    }
  }
`;

export const Item = styled.a<{ isActive: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  height: 100%;
  border-top-style: solid;
  border-width: 2px;
  transition: color 0.2s;

  ${({ isActive, theme }) => css`
    & span {
      ${theme.typo["micro-m"]}
    }

    color: ${isActive
      ? `${theme.colors.primary["60"]}`
      : `${theme.colors.neutral["50"]}`};

    :hover {
      color: ${theme.colors.primary["60"]};
    }

    border-top-color: ${isActive
      ? `${theme.colors.primary["60"]}`
      : "transparent"};
  `};
`;
