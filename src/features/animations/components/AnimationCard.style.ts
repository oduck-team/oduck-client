import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Animation } from "./Carousel";

export const Container = styled.div`
  width: 160px;
  flex-shrink: 0;
  & > a {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const Image = styled.div<Pick<Animation, "image">>`
  width: 100%;
  height: 110px;
  border-radius: 5px;
  ${({ image }) => css`
    background:
      url(${image}),
      lightgray 50% no-repeat;
  `}
  background-size: cover;
  background-position: center;
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 65px;
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
  width: 39px;
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
