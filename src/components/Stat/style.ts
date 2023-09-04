import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { StatStyleProps } from "./index";

export const Container = styled.div<StatStyleProps>`
  width: 100%;
  display: inline-grid;
  grid-auto-flow: column;
  padding: 8px 24px;
  background-color: #fff;

  ${({ primary, theme }) => css`
    backdrop-filter: ${primary ? "blur(38px)" : ""};
    box-shadow: ${primary ? "0px 4px 8px 0px rgba(0, 0, 0, 0.08)" : ""};
    backdrop-filter: blur(38px);
    border-radius: ${primary ? "4px" : ""};
    border: ${primary ? `1px solid ${theme.colors.neutral["05"]}` : ""};

    & .stat-data {
      color: ${primary
        ? theme.colors.primary["60"]
        : theme.colors.neutral["90"]};
    }
  `}
`;

export const StatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Divider = styled.div`
  width: 1px;
  height: 55px;
  margin: 0px 8px;
  background: ${({ theme }) => theme.colors.neutral["20"]};
`;

export const Content = styled.div`
  width: 100%;
  display: inline-grid;
  flex-direction: column;
  text-align: center;
  gap: 8px;
`;

export const Title = styled.span`
  ${({ theme }) => theme.typo["body-3-r"]}
`;

export const Data = styled.span`
  ${({ theme }) => theme.typo["body-2-m"]}
`;

export const Text = styled.span`
  ${({ theme }) => theme.typo["micro-r"]}
`;
