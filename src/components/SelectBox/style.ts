import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { CaretDown } from "@phosphor-icons/react";

import { SelectBoxProps } from ".";

export const SelectBoxContainer = styled.div`
  position: relative;
  outline: none;
`;

export const Select = styled.div<Pick<SelectBoxProps, "selected">>`
  position: relative;
  color: ${({ theme }) => theme.colors.neutral[90]};
  width: 100%;
  padding: 9px 40px 9px 14px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.neutral[30]};
  border-radius: 6px;
  max-height: 40px;
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

export const CaretIcon = styled(CaretDown)`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${({ theme }) => theme.colors.neutral[50]};
`;

export const DropDownList = styled.ul`
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
  border: 1px solid ${({ theme }) => theme.colors.neutral["05"]};
  border-radius: 6px;
  background-color: #fff;
  padding: 8px;
  position: absolute;
  top: calc(40px + 2px);
  left: 0px;
  width: 100%;
  max-height: calc((32px * 6) + 16px); // option height * 개수 + 위 아래 padding
  overflow-y: scroll;
`;

export const Option = styled.li<{ index: number; cursor: number }>`
  color: ${({ theme }) => theme.colors.neutral[90]};
  ${({ theme }) => theme.typo["body-2-r"]}
  padding: 5px 13px 5px 5px;
  border-radius: 6px;
  height: 32px; // option height
  max-height: 32px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${({ theme, index, cursor }) =>
    index === cursor &&
    css`
      background-color: ${theme.colors.neutral[10]};
    `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[10]};
  }
`;
