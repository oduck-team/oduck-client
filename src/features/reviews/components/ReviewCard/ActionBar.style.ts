import styled from "@emotion/styled";

export const ActionBarContainer = styled.div`
  ${({ theme }) => theme.typo["body-3-r"]}
  color: #adaeb8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  cursor: auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;
