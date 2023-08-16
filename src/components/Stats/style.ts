import styled from "@emotion/styled";

import { StatsProps } from "./Stats";

// Stats Style
export const StatsContainer = styled.div<StatsProps>`
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 8px 24px;
  box-shadow: ${({ primary }) =>
    primary ? "0px 4px 22px 0px rgba(0, 0, 0, 0.08)" : ""};
  backdrop-filter: ${({ primary }) => (primary ? "blur(38px)" : "")};
  border-radius: ${({ primary }) => (primary ? "4px" : "")};
  border: ${({ primary, theme }) =>
    primary ? `1px solid ${theme.colors.neutral["05"]}` : ""};

  & .stat-data {
    color: ${({ primary, theme }) =>
      primary ? theme.colors.primary["60"] : theme.colors.neutral["90"]};
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 55px;
  margin: 0px 8px;
  background: ${({ theme }) => theme.colors.neutral["20"]};
`;

// Stat Style

export const StatContainer = styled.div`
  min-width: 72px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 8px;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.neutral["50"]};
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
`;

export const Data = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 150%;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.neutral["50"]};
  font-size: 10px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.2px;
`;
