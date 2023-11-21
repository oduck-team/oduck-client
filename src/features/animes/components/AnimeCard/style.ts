import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface ImageProps {
  image: string;
}

export const AnimeCardContainer = styled.div`
  width: 100%;
`;

export const Image = styled.div<ImageProps>`
  height: 110px;
  border-radius: 5px;
  ${({ image }) => css`
    background:
      url(${image}),
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
`;

export const Title = styled.div`
  ${({ theme }) => theme.typo["body-2-r"]};
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
    ${({ theme }) => theme.typo["body-2-r"]};
    color: ${({ theme }) => theme.colors["neutral"]["70"]};
  }

  & > svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors["primary"]["60"]};
    fill: ${({ theme }) => theme.colors["primary"]["60"]};
  }
`;
