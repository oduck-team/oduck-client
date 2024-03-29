import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  background-color: #fff;
  z-index: ${({ theme }) => theme.zIndex.default};

  & h1 {
    ${({ theme }) => theme.typo["title-3-m"]}
  }
`;

export const Contents = styled.div`
  ${({ theme }) => theme.container}
  display: flex;
  height: 60px;
  padding: 0 16px;
  margin: 0 auto;

  & > div:not(:nth-of-type(2)) {
    width: calc(100% / 3);
  }

  & > div:nth-of-type(2) {
    min-width: calc(100% / 3);
  }

  svg {
    cursor: pointer;
  }
`;
