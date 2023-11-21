import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Star, Trash } from "@phosphor-icons/react";

export const BookmarkCardContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[10]};
  padding: 16px;
  margin: 0 -16px;
  cursor: pointer;

  @media (hover: hover) and (pointer: fine) {
    &:hover img {
      transform: scale(1.2);
    }
  }
`;
export const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 80px;
  height: 100px;
  overflow: hidden;
  border-radius: 4px;
  margin-right: 8px;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  background-color: #d9d9d9;
  overflow: hidden;
  transition: transform ease 0.2s;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
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

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* & > svg {
    color: ${({ theme }) => theme.colors.neutral[40]};

    border-radius: 50%;

    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral[10]};
      color: ${({ theme }) => theme.colors.neutral[50]};
    }
  } */
`;

export const CreatedDate = styled.time`
  ${({ theme }) => theme.typo["body-3-r"]}
  color: ${({ theme }) => theme.colors.neutral[40]}
`;

export const TrashIconContainer = styled.div`
  position: relative;
  right: -8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 8px;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral[10]};

      & > svg {
        color: ${({ theme }) => theme.colors.neutral[50]};
      }
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.neutral[10]};
  }
`;

export const TrashIcon = styled(Trash)`
  color: ${({ theme }) => theme.colors.neutral[40]};
`;
