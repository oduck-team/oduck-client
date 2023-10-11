import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Star } from "@phosphor-icons/react";

export const BookmarkCardContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[10]};
  padding: 16px 0;
`;
export const Image = styled.img`
  flex-shrink: 0;
  width: 80px;
  height: 100px;
  border-radius: 4px;
  background-color: #d9d9d9;
  margin-right: 8px;
`;

export const Title = styled.h4`
  ${({ theme }) => theme.typo["body-2-r"]}
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const RatingContainer = styled.div`
  ${({ theme }) => theme.typo["body-3-m"]}
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const ScoreContainer = styled.div`
  &::after {
    content: "";
    width: 1px;
    height: 12px;
    background-color: ${({ theme }) => theme.colors.neutral[20]};
    display: inline-flex;
    margin: 0 8px;
    position: relative;
    top: 2px;
  }
  &:last-child::after {
    display: none;
  }
`;

export const StarIcon = styled(Star)<{ color: "yellow" | "blue" }>`
  margin-right: 3px;
  position: relative;
  top: 2px;

  ${({ theme, color }) =>
    color === "yellow"
      ? css`
          fill: ${theme.colors.secondary[50]};
        `
      : css`
          fill: ${theme.colors.primary[60]};
        `}
`;

export const Score = styled.span`
  color: ${({ theme }) => theme.colors.neutral[70]};
`;

export const MyScore = styled.span`
  color: ${({ theme }) => theme.colors.primary[60]};
`;

export const Date = styled.time`
  ${({ theme }) => theme.typo["body-3-r"]}
  color: ${({ theme }) => theme.colors.neutral[40]}
`;
