import styled from "@emotion/styled";

import { Sizes } from "./ActionChip.style";

import { ChipProps } from ".";

export const Container = styled.button<Omit<ChipProps, "styleType" | "icon">>`
  width: fit-content;
  ${({ size = "md" }) => Sizes[size]}
  padding: 6px 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  ${({ theme }) => theme.typo["body-3-r"]};
  border: ${({ active, theme }) =>
    active
      ? `1px solid ${theme.colors["primary"]["60"]}`
      : `1px solid ${theme.colors["neutral"]["30"]}`};
  background-color: ${({ active, theme }) =>
    active ? theme.colors["primary"]["60"] : "#ffffff"};
  color: ${({ active, theme }) =>
    active ? "#ffffff" : theme.colors["neutral"]["40"]};
  cursor: pointer;
`;
