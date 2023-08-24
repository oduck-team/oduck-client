import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > h1 {
    ${({ theme }) => theme.colors["neutral"]["100"]};
    ${({ theme }) => theme.typo["title-2-m"]};
  }
`;

export const CardSlider = styled.div`
  width: 100%;
  padding-right: 16px;
  display: flex;
  gap: 8px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
