import styled from "@emotion/styled";

export const SpoilerCheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.typo["micro-m"]}
  color: ${({ theme }) => theme.colors.neutral["50"]};
  margin-left: 4px;
`;
