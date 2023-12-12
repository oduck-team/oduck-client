import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";

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

export const AnimeRankingContainer = styled.section`
  overflow: hidden;
  margin-bottom: 34px;

  & > h1 {
    ${({ theme }) => theme.typo["title-2-m"]}
    color: ${({ theme }) => theme.colors["neutral"]["100"]};
    padding-left: 16px;
    margin-bottom: 8px;
  }

  /** 아래쪽 캐러셀의 item 간격 */
  & .sub-carousel .slick-slider .slick-list {
    margin-right: -8px;
  }
  & .sub-carousel .slick-slider .slick-slide > div {
    margin-right: 8px;
  }

  /* 아래쪽 캐러셀의 왼쪽 마진 */
  & .sub-carousel .slick-slider {
    & .slick-track .slick-slide:first-of-type {
      margin-left: 16px;
    }
  }

  /* 이전, 다음 버튼 */
  ${({ theme }) => theme.mq("md")} {
    & .slick-prev,
    .slick-next {
      z-index: ${({ theme }) => theme.zIndex.carousel};
    }
    & .slick-prev {
      left: 24px;
      top: 50px;
    }
    & .slick-next {
      right: 24px;
      top: 50px;
    }
  }
`;

export const MainCarouselContainer = styled.div`
  margin: 0 16px;
`;

export const HighlightItemContainer = styled.div`
  position: relative;
  width: calc(100% - 32px);
  height: 0;
  padding-bottom: 46%;
  margin-bottom: 16px;
  cursor: pointer;
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
  background-position: center 40%;
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

export const SliderItem = styled.div`
  width: 95px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
  cursor: pointer;

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
  position: relative;
  width: 100%;
  height: 95px;
  border-radius: 5px;
  background: ${({ image }) => `url(${image}),
      lightgray 50% no-repeat`};
  background-size: cover;
  background-position: center 40%;
  margin-bottom: 8px;
`;

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
