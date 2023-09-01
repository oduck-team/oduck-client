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
