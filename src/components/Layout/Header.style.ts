import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  background-color: #fff;

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

  & > div {
    width: calc(100% / 3);
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;
