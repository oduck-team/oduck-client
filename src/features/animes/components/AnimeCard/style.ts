import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface CardProps {
  size?: "md" | "lg";
}

interface ImageProps extends CardProps {
  image: string;
}

export const AnimeCardContainer = styled.div<CardProps>`
  width: ${({ size = "md" }) => (size === "md" ? `160px` : `100%`)};
  flex-shrink: 0;
  & > a {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const Image = styled.div<ImageProps>`
  width: 100%;
  height: ${({ size = "md" }) => (size === "md" ? `110px` : `152px`)};
  border-radius: 5px;
  ${({ image }) => css`
    background:
      url(${image}),
      lightgray 50% no-repeat;
  `}
  background-size: cover;
  background-position: center;
`;

export const InfoContainer = styled.div<CardProps>`
  width: 100%;
  height: ${({ size = "md" }) => (size === "md" ? `65px` : `fit-content`)};
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
