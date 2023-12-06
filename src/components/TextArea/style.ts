import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { TextareaBoxProps } from ".";

export const TextareaBox = styled.textarea<TextareaBoxProps>`
  ${({ warn = false, theme, negativeMargin, height }) => css`
    ${theme.typo["body-2-r"]};
    --scale: 1.1429;
    width: calc(100% * var(--scale));
    font-size: 16px;
    transform: scale(0.875);
    transform-origin: left top;
    padding: 0.6rem 1.16rem;
    margin-bottom: ${negativeMargin}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    background-color: white;
    color: ${theme.colors["neutral"]["90"]};
    border-radius: 7px;
    border: 1px solid
      ${warn ? theme.colors["warn"]["40"] : theme.colors["neutral"]["30"]};
    transition: border 0.2s;
    resize: none;

    /* height를 직접 지정한 경우 */
    ${height &&
    css`
      height: calc(${height}px - ${negativeMargin}px);
    `}

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
  `}
`;

export const Message = styled.div`
  ${({ theme }) => css`
    ${theme.typo["micro-r"]};
    color: ${theme.colors["warn"]["40"]};
    width: fit-content;
    margin: 4px 0px 0px 8px;
    flex-shrink: 0;
  `}
`;

export const TextareaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
