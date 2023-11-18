import { css } from "@emotion/react";
import styled from "@emotion/styled";

export interface SlideProps {
  image: string;
}

interface SlidesProps {
  translateValue: number;
  transitionValue: number;
}

interface IndicatorProps {
  active: boolean;
}

export const AnimeCarouselContainer = styled.div`
  width: 100%;
  height: 545px;
  position: relative;
  overflow: hidden;

  // arrow button
  button {
    ${({ theme }) => theme.mq("md")} {
      display: block;
    }
    display: none;
    position: absolute;
    z-index: ${({ theme }) => theme.zIndex.carousel + 1};
    color: rgba(255, 255, 255, 0.6);
    top: calc(50% - 15px);
    left: 16px;

    &:hover {
      color: rgba(255, 255, 255, 0.9);
    }

    &:not([disabled]):active {
      color: rgba(255, 255, 255, 0.9);
      background: none;
      border-color: rgba(0, 0, 0, 0);
    }

    :last-of-type {
      left: auto;
      right: 19px;
    }
  }
`;

// blur 이미지 배경
export const Background = styled.div<SlideProps>`
  width: 100%;
  height: 100%;
  ${({ image }) => css`
    background:
      linear-gradient(0deg, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 100%),
      url(${image}),
      lightgray -36.515px 1.434px / 119.018% 99.743% no-repeat;
  `}
  background-size: cover;
  background-position: center;
  filter: blur(5px);
  transform: scale(1.05);
`;

export const Slides = styled.div<SlidesProps>`
  width: calc((100% * 6));
  position: absolute;
  top: 24px;
  height: 497px;
  z-index: ${({ theme }) => theme.zIndex.carousel};
  display: flex;
  touch-action: pan-x;
  transform: ${({ translateValue }) => `translateX(${translateValue}px)`};
  transition: ${({ transitionValue }) => `all ${transitionValue}s`};
  cursor: pointer;
`;

export const IndicatorContainer = styled.div`
  display: flex;
  gap: 6px;
  position: absolute;
  left: calc(50% - 21px);
  bottom: 48px;
  z-index: ${({ theme }) => theme.zIndex.carousel + 1};
`;

export const Indicator = styled.span<IndicatorProps>`
  background-color: ${({ active, theme }) =>
    active ? "white" : theme.colors["neutral"]["50"]};
  width: 6px;
  height: 6px;
  border-radius: 999px;
`;
