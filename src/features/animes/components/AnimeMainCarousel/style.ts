import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const AnimeMainCarouselContainer = styled.div<{ image: string }>`
  position: relative;
  width: 100%;
  height: 545px;
  overflow: hidden;

  /** 배경 blur 처리 */
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    ${({ image }) => css`
    background:
      linear-gradient(0deg, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 100%),
      url(${image}),
      lightgray -36.515px 1.434px / 119.018% 99.743% no-repeat;
      background-
  `}
    background-size: cover;
    background-position: center;
    filter: blur(5px);
    transform: scale(1.05);
  }
`;
