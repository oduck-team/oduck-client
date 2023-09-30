import { SerializedStyles, Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

import { StatProps, Variant } from "./index";

function getStatStyle(theme: Theme, variant: Variant) {
  const styles: Record<Variant, SerializedStyles> = {
    primary: css`
      display: inline-grid;
      grid-auto-flow: column;
      justify-items: center;
      align-items: center;
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
      border-radius: 8px;
      border: 1px solid ${theme.colors.neutral["05"]};
      padding: 16px 24px;

      & .stat-data {
        color: ${theme.colors.primary["60"]};
      }
    `,
    ghost: css`
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px 0;

      & .stat-data {
        color: ${theme.colors.neutral["90"]};
      }
    `,
  };

  return styles[variant];
}

export const StatContainer = styled.div<Pick<StatProps, "variant">>`
  background-color: #fff;

  ${({ theme, variant = "primary" }) => getStatStyle(theme, variant)}
`;

function getContentStyle(theme: Theme, variant: Variant) {
  const styles: Record<Variant, SerializedStyles> = {
    primary: css`
      padding-left: 20px;
      padding-right: 20px;

      &:first-of-type {
        padding-left: 0;
      }
    `,
    ghost: css`
      position: relative;
      width: 100%;
      border-right: none;

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 1px;
        height: 24px;
        background-color: ${theme.colors.neutral[20]};
      }
      &:last-child::after {
        display: none;
      }
    `,
  };

  return styles[variant];
}

export const Content = styled.div<Pick<StatProps, "variant">>`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  gap: 4px;

  border-left: 1px solid transparent;
  border-right: 1px solid ${({ theme }) => theme.colors.neutral["10"]};

  ${({ theme, variant = "primary" }) => getContentStyle(theme, variant)}

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
  color: ${({ theme }) => theme.colors.neutral["50"]};
`;
