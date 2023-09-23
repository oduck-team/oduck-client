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
  width: 100%;
  display: flex;
  margin-bottom: 8px;
`;

export const Image = styled.div<ImageProps>`
  width: 60px;
  height: 74px;
  border-radius: 4px;
  border: 1px solid #ebebeb;
  margin-right: 12px;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 2px;

  & > span:first-of-type {
    ${({ theme }) => theme.typo["body-2-m"]}
    color: ${({ theme }) => theme.colors["neutral"]["70"]};
    letter-spacing: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const ContentContainer = styled.article`
  ${({ theme }) => theme.typo["body-2-r"]};
  color: #4d4c51;
  margin-bottom: 8px;
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
