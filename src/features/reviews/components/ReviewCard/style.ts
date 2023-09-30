import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { ReviewCardProps } from ".";

export const ReviewCardContainer = styled.article<
  Pick<ReviewCardProps, "isBlock">
>`
  ${({ isBlock }) =>
    isBlock
      ? css`
          margin: 0 -16px;
          padding: 16px;
        `
      : css`
          padding: 16px 0;
        `}

  border-top: 2px solid ${({ theme }) => theme.colors.neutral[10]};

  &:last-child {
    border-bottom: 2px solid ${({ theme }) => theme.colors.neutral[10]};
  }
`;
