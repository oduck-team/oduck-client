import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { CaretDown } from "@phosphor-icons/react";

import { SelectBoxProps } from ".";

export const SelectBoxContainer = styled.div`
  position: relative;
`;

export const Select = styled.select<Pick<SelectBoxProps, "selected">>`
  color: ${({ theme }) => theme.colors.neutral[90]};
  width: 100%;
  padding: 9px 40px 9px 14px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.neutral[30]};
  border-radius: 6px;
  min-height: 40px;
  user-select: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  ${({ theme, selected }) =>
    selected &&
    css`
      border: 1px solid ${theme.colors.primary[60]};
    `}

  &:hover,
  &:active {
    border: 1px solid ${({ theme }) => theme.colors.primary[60]};
  }
`;

export const Option = styled.option`
  color: ${({ theme }) => theme.colors.neutral[90]};
  ${({ theme }) => theme.typo["body-2-r"]}
`;

export const CaretIcon = styled(CaretDown)`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${({ theme }) => theme.colors.neutral[50]};
`;
