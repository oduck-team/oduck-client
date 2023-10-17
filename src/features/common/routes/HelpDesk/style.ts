import styled from "@emotion/styled";

export const HelpDeskContainer = styled.div`
  width: 100%;
  height: calc(100dvh - 66px);
  overflow: hidden;
`;

export const Slide = styled.div<{ translateX?: number }>`
  width: 200%;
  height: calc(100% - 60px);
  display: flex;
  transform: ${({ translateX = 0 }) => `translateX(${translateX}%)`};
  transition: all 0.3s;
`;
