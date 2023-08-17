import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface SlideProps {
  image: string;
}

interface SlidesProps {
  translateValue: number;
  transitionValue: number;
}

interface IndicatorProps {
  active: boolean;
}

const ellipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export const Container = styled.div`
  width: 100%;
  height: 558px;
  overflow: hidden;
  position: relative;
`;

export const Background = styled.div<SlideProps>`
  width: 100%;
  height: 100%;
  background: ${({
    image,
  }) => `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%),
    url(${image}),
    lightgray -36.515px 1.434px / 119.018% 99.743% no-repeat`};

  background-size: cover;
  filter: blur(5px);
  transform: scale(1.05);
`;

export const SlideContainer = styled.div`
  --width: calc(100% - 32px);
  width: var(--width);
  height: 442.699px;
  overflow: hidden;
  position: absolute;
  top: 55px;
  left: calc(50% - (var(--width) / 2));
  z-index: 500; // 논의 필요
  border-radius: 17px;

  & > button {
    ${({ theme }) => theme.mq("md")} {
      display: block;
    }
    display: none;
    position: absolute;
    z-index: 600;
    color: rgba(255, 255, 255, 0.6);
    top: calc(50% - 15px);

    &:hover {
      color: rgba(255, 255, 255, 0.9);
    }

    &:not([disabled]):active {
      color: rgba(255, 255, 255, 0.9);
      background: none;
      border-color: rgba(0, 0, 0, 0);
    }

    :last-of-type {
      right: 3px;
    }
  }
`;

export const Slides = styled.div<SlidesProps>`
  width: calc(100% * 6);
  height: 100%;
  display: flex;
  touch-action: pan-x;
  transform: ${({ translateValue }) => `translateX(${translateValue}px)`};
  transition: ${({ transitionValue }) => `all ${transitionValue}s`};
`;

export const Slide = styled.div<SlideProps>`
  width: calc(100% / 6);
  height: 100%;
  border-radius: 17px;
  ${({ image }) => css`
    background:
      linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%),
      url(${image}),
      lightgray -31.19px 1.138px / 119.018% 99.743% no-repeat;
  `}
  background-size: cover;
  box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.17);
  padding: 0 16px 42px;
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
    ${ellipsis}
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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
    width: 66.7%; // 논의 필요
    /* width: 207px; */
    ${ellipsis}
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

export const IndicatorContainer = styled.div`
  display: flex;
  gap: 6px;
  position: absolute;
  left: calc(50% - 21px);
  bottom: 20.7px;
  z-index: 600;
`;

export const Indicator = styled.span<IndicatorProps>`
  background-color: ${({ active, theme }) =>
    active ? "white" : theme.colors["neutral"]["50"]};
  width: 6px;
  height: 6px;
  border-radius: 999px;
`;
