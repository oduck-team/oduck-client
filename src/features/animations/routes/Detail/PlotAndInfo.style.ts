import styled from "@emotion/styled";

export const Plot = styled.p<{ isExpanded: boolean }>`
  display: -webkit-box;
  margin-top: 8px;
  margin-bottom: 8px;
  -webkit-line-clamp: ${({ isExpanded }) => (isExpanded ? "none" : "2")};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: max-content auto;
  gap: 4px;
  list-style: none;

  & > li {
    display: contents; // li 요소를 없는 것처럼 처리
  }

  & > li > span:first-of-type {
    color: ${({ theme }) => theme.colors.neutral["70"]};
    padding-right: 8px;
    max-width: 140px;
  }

  & > li > span:last-of-type {
    text-align: left;
  }
`;
