import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { AnimeCardProps } from ".";

interface ImageProps {
  image: string;
}

export const AnimeCardContainer = styled.div<Pick<AnimeCardProps, "display">>`
  width: 100%; // display === 'carousel';
  cursor: pointer;

  ${({ theme, display }) =>
    display === "default" &&
    css`
      width: calc(50% - 4px);
      &:nth-of-type(odd) {
        margin-right: 8px;
      }
      ${theme.mq("sm")} {
        width: calc(33% - 4px);
        &:nth-of-type(odd) {
          margin-right: 0;
        }
        &:not(:nth-of-type(3n)) {
          margin-right: 8px;
        }
      }

      & .image-container {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 70%;
      }

      & .image {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
      }
    `}
`;

/** .image className */
export const Image = styled.div<ImageProps>`
  height: 110px; // display === 'carousel';
  border-radius: 5px;
  ${({ image }) => css`
    background:
      url("${image}"),
      lightgray 50% no-repeat;
  `}
  background-size: cover;
  background-position: center;
  margin-bottom: 8px;
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  margin-top: 8px;
`;

export const Title = styled.div`
  ${({ theme }) => theme.typo["body-3-r"]};
  color: ${({ theme }) => theme.colors["neutral"]["90"]};
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Rating = styled.div`
  display: flex;
  height: 21px;
  justify-content: center;
  align-items: center;
  gap: 3px;
  flex-shrink: 0;

  & > span {
    ${({ theme }) => theme.typo["body-3-r"]};
    color: ${({ theme }) => theme.colors["neutral"]["70"]};
  }

  & > svg {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors["primary"]["60"]};
    fill: ${({ theme }) => theme.colors["primary"]["60"]};
  }
`;
