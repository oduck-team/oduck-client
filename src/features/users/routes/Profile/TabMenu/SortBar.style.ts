import styled from "@emotion/styled";

export const SortBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
`;

export const Count = styled.span`
  ${({ theme }) => theme.typo["body-2-r"]}
  color: ${({ theme }) => theme.colors.neutral[100]};
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ButtonText = styled.span`
  ${({ theme }) => theme.typo["body-2-r"]}
  color: ${({ theme }) => theme.colors.neutral[80]};
  margin-right: 4px;
`;

export const SheetTitle = styled.span`
  ${({ theme }) => theme.typo["body-1-m"]}
  padding: 0 24px 16px;
`;
