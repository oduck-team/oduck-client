import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { ReviwCardWithImageProps } from "./ReviewCardWithImage";

export const ReviewCardWithImageContainer = styled.article<
  Pick<ReviwCardWithImageProps, "isBlock">
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

export const AnimationConatiner = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

export const Image = styled.img`
  flex-shrink: 0;
  width: 60px;
  height: 74px;
  border-radius: 4px;
  background-color: #d9d9d9;
  margin-right: 8px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 8px;
`;

export const Title = styled.span`
  ${({ theme }) => theme.typo["body-2-m"]};
  color: ${({ theme }) => theme.colors.neutral[70]};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;
