import styled from "@emotion/styled";

export const AnimationSlideContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > h1 {
    ${({ theme }) => theme.colors["neutral"]["100"]};
    ${({ theme }) => theme.typo["title-2-m"]};
    padding-left: 16px;
  }
`;

export const CardSlider = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  gap: 8px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
