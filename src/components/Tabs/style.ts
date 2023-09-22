import styled from "@emotion/styled";

import { StyleProps } from ".";

export const TabTitles = styled.ul`
  display: flex;
`;
export const TabTitle = styled.li<StyleProps>`
  display: flex;
  width: 180px;
  padding: 14px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border: none;
  background-color: #fff;
  border-bottom: ${({ active, theme }) =>
    active
      ? `2px solid ${theme.colors.primary["60"]}`
      : `2px solid ${theme.colors.neutral["20"]}`};
  ${({ theme }) => theme.typo["body-2-r"]}
  color: ${({ active, theme }) =>
    active ? theme.colors.primary["60"] : theme.colors.neutral["50"]};
  &:hover {
    color: ${({ theme }) => theme.colors.primary["60"]};
  }
`;
