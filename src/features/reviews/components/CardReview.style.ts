import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface ImageProps {
  image: string;
}

export const Container = styled.div`
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.neutral["20"]};
`;

export const AnimationContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const Image = styled.div<ImageProps>`
  width: 60px;
  height: 74px;
  border-radius: 4px;
  border: 1px solid #ebebeb;
  ${({ image }) => css`
    background:
      url(${image}),
      lightgray 50% / cover no-repeat;
  `}
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`;

export const InfoContainer = styled.div`
  width: 231px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  & > div:first-of-type {
    width: 231px;
    ${({ theme }) => theme.typo["body-2-m"]};
    color: ${({ theme }) => theme.colors["neutral"]["70"]};
    letter-spacing: normal;
    height: 3em;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const ContentContainer = styled.article`
  width: 316px;
  ${({ theme }) => theme.typo["body-2-r"]};
  color: ${({ theme }) => theme.colors["neutral"]["80"]};
  letter-spacing: normal;
  line-height: 140%;
`;

export const SpoilerButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  width: 100%;
  max-width: 368px;
  padding: 0 16px;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.neutral["05"]};
  color: ${({ theme }) => theme.colors.neutral["50"]};
  cursor: pointer;
  & > span {
    color: ${({ theme }) => theme.colors.neutral["80"]};
  }
`;

export const ActionsContainer = styled.div`
  width: 100%;
`;
