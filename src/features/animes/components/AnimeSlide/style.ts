import styled from "@emotion/styled";

export const AnimeSlideContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
  margin-bottom: 32px;

  /* 캐러셀 item 간격 */
  & .slick-list {
    margin-right: -8px;
  }
  & .slick-slide > div {
    margin-right: 8px;
  }

  /* 캐러셀 왼쪽 마진 */
  & .slick-slider {
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
      top: 57px;
    }
    & .slick-next {
      right: 12px;
      top: 57px;
    }
  }

  & > h1 {
    ${({ theme }) => theme.colors["neutral"]["100"]};
    ${({ theme }) => theme.typo["title-3-m"]};
    padding-left: 16px;
  }
`;
