import styled from "@emotion/styled";

export const SearchContainer = styled.main`
  ${({ theme }) => theme.container}
  margin: 0 auto;

  & > h1 {
    display: none;
  }
`;

export const Section = styled.section`
  padding: 0 16px;

  & > h1 {
    ${({ theme }) => theme.typo["title-3-m"]}
    color: ${({ theme }) => theme.colors.neutral["80"]};
    margin-bottom: 8px;
  }
`;
