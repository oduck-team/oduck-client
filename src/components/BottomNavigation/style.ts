import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 0;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  height: 66px;
  background-color: white;
  box-shadow: 0px -4px 6px 0px rgba(0, 0, 0, 0.06);
  z-index: ${({ theme }) => theme.zIndex.default};

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
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 2px;
  height: 100%;
  padding-top: 8px;
  transition: color 0.2s;

  ${({ isActive, theme }) => css`
    & span {
      ${theme.typo["micro-m"]}
      font-size: 9px;
    }

    color: ${isActive
      ? `${theme.colors.primary["60"]}`
      : `${theme.colors.neutral["50"]}`};

    :hover {
      color: ${theme.colors.primary["60"]};
    }
  `};
`;
