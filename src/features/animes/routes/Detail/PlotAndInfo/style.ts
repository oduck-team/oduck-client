import styled from "@emotion/styled";

export const Plot = styled.p`
  display: -webkit-box;
  margin-top: 8px;
  ${({ theme }) => theme.typo["body-3-r"]};
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: max-content auto;
  column-gap: 24px;
  row-gap: 8px;
  margin-top: 24px;
  list-style: none;

  & > li {
    display: contents; // li 요소를 없는 것처럼 처리
  }

  & > li > span:first-of-type {
    color: ${({ theme }) => theme.colors.neutral["60"]};
    padding-right: 8px;
    max-width: 140px;
    ${({ theme }) => theme.typo["body-3-r"]};
    letter-spacing: normal;
  }

  & > li > span:last-of-type {
    text-align: left;
    ${({ theme }) => theme.typo["body-3-m"]};
  }
`;
