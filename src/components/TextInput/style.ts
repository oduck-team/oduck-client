import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { TextInputBoxProps } from ".";

export const TextInputBox = styled.input<TextInputBoxProps>`
  ${({ warn = false, theme }) => {
    return css`
      ${theme.typo["body-2-r"]};
      display: flex;
      width: 100%;
      height: 40px;
      padding: 0px 1rem;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
      background-color: white;
      color: ${theme.colors["neutral"]["50"]};
      border-radius: 6px;
      border: 1px solid
        ${warn ? theme.colors["warn"]["40"] : theme.colors["neutral"]["30"]};
      transition: all 0.2s;

      &::placeholder {
        color: ${theme.colors["neutral"]["50"]};
      }

      &:hover {
        ${!warn && `border: 1px solid ${theme.colors["primary"]["60"]};`}
      }

      // pressed
      &:focus {
        color: ${theme.colors["neutral"]["90"]};
        outline: none;
        ${!warn && `border: 1px solid ${theme.colors["primary"]["60"]};`}
        ${!warn && `box-shadow: 0px 0px 2px 0px rgba(17, 124, 255, 0.8);`}
      }
    `;
  }}
`;

export const Message = styled.div`
  ${({ theme }) => {
    return css`
      ${theme.typo["micro-r"]};
      color: ${theme.colors["warn"]["40"]};
      width: fit-content;
      margin: 4px 0px 0px 8px;
    `;
  }}
`;

export const TextInputContainer = styled.div`
  width: 328px;
`;
