import styled from "@emotion/styled";

import { colors } from "@/styles/colors";

import { ReviewLikeButtonProps } from "./ReviewLikeButton";

export const ReviewLikeButtonContainer = styled.button<
  Pick<ReviewLikeButtonProps, "isLiked">
>`
  display: flex;
  align-items: center;
  padding: 2px 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  ${({ theme }) => theme.typo["body-3-r"]}

  @media(hover: hover) and (pointer: fine) {
    &:hover {
      & * {
        color: ${({ theme }) => theme.colors.neutral["70"]};
      }
    }
  }

  & > span {
    margin-left: 4px;
    color: ${({ theme }) => theme.colors.neutral["50"]};
    transition: color ease 0.1s;
  }

  & > svg {
    color: ${({ isLiked, theme }) =>
      isLiked ? colors.red["40"] : theme.colors.neutral["50"]};
    fill: ${({ isLiked }) => (isLiked ? colors.red["40"] : "")};
    transition: color ease 0.1s;
  }
`;
