import { SerializedStyles, Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

import { StatProps, Varient } from "./index";

function getStatStyle(theme: Theme, varient: Varient) {
  const styles: Record<Varient, SerializedStyles> = {
    primary: css`
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
      border-radius: 8px;
      border: 1px solid ${theme.colors.neutral["05"]};

      & .stat-data {
        color: ${theme.colors.primary["60"]};
      }
    `,
    ghost: css`
      & .stat-data {
        color: ${theme.colors.neutral["90"]};
      }
    `,
  };

  return styles[varient];
}

export const Container = styled.div<Pick<StatProps, "varient">>`
  display: inline-grid;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  padding: 16px 24px;
  background-color: #fff;

  ${({ theme, varient = "primary" }) => getStatStyle(theme, varient)}
`;

export const Content = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  gap: 4px;
  padding-left: 20px;
  padding-right: 20px;
  border-left: 1px solid transparent;
  border-right: 1px solid ${({ theme }) => theme.colors.neutral["10"]};

  &:first-of-type {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
    border: none;
  }
`;

export const Title = styled.span`
  ${({ theme }) => theme.typo["body-3-r"]}
  color: ${({ theme }) => theme.colors.neutral["50"]};
`;

export const Data = styled.span`
  ${({ theme }) => theme.typo["body-2-m"]}
`;

export const Description = styled.span`
  ${({ theme }) => theme.typo["micro-r"]}
`;
