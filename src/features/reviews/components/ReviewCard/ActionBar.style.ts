import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";

import { ActionBarProps, Include } from "./ActionBar";

export const ActionBarContainer = styled.div<Pick<ActionBarProps, "include">>`
  ${({ theme }) => theme.typo["body-3-r"]}
  color: #adaeb8;

  ${({ include = "common" }) => getActionBarContainerStyle(include)};
`;

export const ButtonContainer = styled.div<Pick<ActionBarProps, "include">>`
  ${({ include = "common" }) => getButtonContainerStyle(include)}
`;

function getActionBarContainerStyle(include: Include) {
  const styles: Record<Include, SerializedStyles> = {
    time: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 8px;
    `,
    common: css`
      padding-top: 16px;
    `,
  };

  return styles[include];
}

function getButtonContainerStyle(include: Include) {
  const styles: Record<Include, SerializedStyles> = {
    time: css`
      display: flex;
      gap: 8px;
    `,
    common: css`
      display: flex;
      justify-content: space-between;
    `,
  };

  return styles[include];
}
