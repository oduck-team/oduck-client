import styled from "@emotion/styled";

import { colors } from "@/styles/colors";

import { ReviewLikeButtonProps } from "./ReviewLikeButton";

export const ReviewLikeButtonContainer = styled.button<
  Pick<ReviewLikeButtonProps, "isLike">
>`
  display: flex;
  align-items: center;
  padding: 2px 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  ${({ theme }) => theme.typo["body-3-r"]}

  & > span {
    margin-left: 4px;
    color: ${({ theme }) => theme.colors.neutral["50"]};
  }

  & > svg {
    color: ${({ isLike, theme }) =>
      isLike ? colors.red["40"] : theme.colors.neutral["50"]};
    fill: ${({ isLike }) => (isLike ? colors.red["40"] : "")};
  }
`;
