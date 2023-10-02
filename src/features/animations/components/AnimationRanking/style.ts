import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";

import { Rating } from "../AnimationCarousel/style";

interface ItemProps {
  readonly image: string;
}

type RankSize = "sm" | "lg";

interface RankProps {
  readonly size?: RankSize;
}

const RankSizes: Record<RankSize, SerializedStyles> = {
  sm: css`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    border-radius: 2px;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(1.5px);
    right: 4px;
    bottom: 4px;
    font-size: 12px;
  `,
  lg: css`
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(1.5px);
    right: 8px;
    top: 8px;
  `,
};

export const Rank = styled.div<RankProps>`
  position: absolute;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.typo["title-2-b"]};
  ${({ size = "sm" }) => css`
    ${RankSizes[size]}
  `}
`;

export const AnimationRankingContainer = styled.section`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;

  & > h1 {
    ${({ theme }) => theme.typo["title-2-m"]}
    color: ${({ theme }) => theme.colors["neutral"]["100"]};
    padding-left: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  flex-shrink: 0;
`;

export const HighlightItemContainer = styled.div`
  position: relative;
  width: calc(100% - 32px);
  height: 0;
  padding-bottom: 46%;
  margin: 0 auto;
`;

export const HighlightItem = styled.div<ItemProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;
  background: ${({
    image,
  }) => `linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, #000 100%),
    url(${image}),
    lightgray 50%
    no-repeat`};
  background-size: cover;
  background-position: center;
  padding: 16px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 0.5s;

  & > h3 {
    ${({ theme }) => theme.typo["body-3-r"]}
    letter-spacing: normal;
    color: ${({ theme }) => theme.colors["neutral"]["20"]};
  }

  & > h2 {
    ${({ theme }) => theme.typo["title-3-m"]}
    width: 85%;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: nowrap;
  }
`;

export const ItemSlider = styled.div`
  width: 100%;
  padding: 0 16px;
  height: 139px;
  display: flex;
  gap: 16px;
  overflow-x: scroll;
  // 스크롤 안 보이도록 함
  -ms-overflow-style: none; /* 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */

  &::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

export const SliderItem = styled.div`
  width: 95px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;

  & > div:last-of-type {
    ${({ theme }) => theme.typo["body-3-r"]}
    color: ${({ theme }) => theme.colors["neutral"]["90"]};
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const SliderItemImage = styled.div<ItemProps>`
  width: 100%;
  height: 95px;
  border-radius: 5px;
  background: ${({ image }) => `url(${image}),
      lightgray 50% no-repeat`};
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const SliderItemRating = styled(Rating)`
  position: absolute;
  right: 16px;
  bottom: 20px;
  & > svg {
    margin-top: 1px;
  }
`;
