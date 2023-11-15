import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { SlideProps } from "./style";

export const Slide = styled.div<SlideProps>`
  width: calc(100% / 6 - 32px);
  margin: 0 16px 0 16px;
  height: 100%;
  border-radius: 17px;
  ${({ image }) => css`
    background:
      linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 100%),
      url(${image}),
      lightgray -31.19px 1.138px / 119.018% 99.743% no-repeat;
  `}
  background-size: cover;
  background-position: center;
  box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.17);
  padding: 0 16px 46px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  color: white;

  & > div:first-of-type {
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    ${({ theme }) => theme.mq("md")} {
      ${({ theme }) => theme.typo["heading-1"]}
    }
    ${({ theme }) => theme.typo["title-2-m"]}
  }
`;

export const Review = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 54px;

  & > span:first-of-type {
    ${({ theme }) => theme.mq("md")} {
      ${({ theme }) => theme.typo["title-2-m"]}
    }
    ${({ theme }) => theme.typo["body-3-r"]}

    opacity: 0.9;
    width: 66.7%;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: nowrap;
  }
`;

export const Rating = styled.div`
  color: ${({ theme }) => theme.colors["secondary"]["50"]};
  ${({ theme }) => theme.mq("md")} {
    font-size: 20px;
  }
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem;
  letter-spacing: -0.7px;
  display: flex;
  align-items: center;
  gap: 3px;

  & > svg {
    ${({ theme }) => theme.mq("md")} {
      width: 20px;
      height: 20px;
    }
    width: 14px;
    height: 14px;
    margin-bottom: 1px; // 아이콘 위치 숫자와 맞게 조정
    display: flex;
    justify-content: center;
    align-items: center;
    fill: ${({ theme }) => theme.colors["secondary"]["50"]};
  }
`;
