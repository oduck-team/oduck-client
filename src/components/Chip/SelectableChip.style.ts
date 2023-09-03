import styled from "@emotion/styled";

import { ChipProps } from ".";

export const Container = styled.button<Omit<ChipProps, "styleType" | "icon">>`
  width: fit-content;
  height: 28px;
  padding: 6px 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  ${({ theme }) => theme.typo["body-3-r"]};
  border: ${({ active, theme }) =>
    active
      ? `1px solid ${theme.colors["primary"]["50"]}`
      : `1px solid ${theme.colors["neutral"]["20"]}`};
  background-color: ${({ active, theme }) =>
    active ? theme.colors["primary"]["60"] : "#ffffff"};
  color: ${({ active, theme }) =>
    active ? "#ffffff" : theme.colors["neutral"]["50"]};
  cursor: pointer;
`;
