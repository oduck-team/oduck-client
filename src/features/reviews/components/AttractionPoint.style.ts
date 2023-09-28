import styled from "@emotion/styled";

export const Container = styled.label<{ isChecked: boolean }>`
  ${({ theme }) => theme.typo["body-3-r"]}
  display: flex;
  align-items: center;
  height: 32px;
  padding-left: 16px;
  background-color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.primary["50"] : theme.colors.neutral["05"]};
  border-radius: 6px;
  color: ${({ isChecked }) => (isChecked ? "#fff" : "inherit")};
  cursor: pointer;

  & > input[type="checkbox"] {
    height: 0;
    width: 0;
  }

  & > strong {
    ${({ theme }) => theme.typo["body-2-m"]}
  }
`;
