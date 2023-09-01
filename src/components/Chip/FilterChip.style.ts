import styled from "@emotion/styled";

import { Sizes } from "./ActionChip.style";

import { ChipProps } from ".";

export const Container = styled.button<Omit<ChipProps, "styleType">>`
  width: fit-content;
  ${({ size = "md" }) => Sizes[size]}
  padding: 8px 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: ${({ active, theme }) =>
    active
      ? `1px solid ${theme.colors["primary"]["60"]}`
      : `1px solid ${theme.colors["neutral"]["40"]}`};
  background-color: #ffffff;
  color: ${({ active, theme }) =>
    active ? theme.colors["primary"]["60"] : theme.colors["neutral"]["40"]};
  ${({ theme }) => theme.typo["body-2-m"]};
  ${({ active }) => active && `font-weight: 700`};
  letter-spacing: normal;
  cursor: pointer;
  flex-shrink: 0;

  & > svg {
    width: 16px;
    height: 16px;
    stroke-width: 2.5px;
  }
`;
