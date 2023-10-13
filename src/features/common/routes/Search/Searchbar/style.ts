import styled from "@emotion/styled";

export const SearchbarContainer = styled.div<{ isButtonVisible: boolean }>`
  position: relative;
  width: 100%;

  & > svg {
    position: absolute;
    top: 10px;
    left: 8px;
    color: ${({ theme }) => theme.colors.neutral["60"]};
    z-index: 10;
  }

  & form {
    display: flex;
    align-items: center;
  }

  & label {
    display: none;
  }

  & input[type="text"] {
    ${({ theme }) => theme.typo["body-2-m"]}
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    --scale: 1.1429;
    width: calc(100% * var(--scale));
    height: calc(40px * var(--scale));
    font-size: 16px;
    transform: scale(0.875);
    transform-origin: left top;
    padding-left: calc(36px * var(--scale));
    padding-right: calc(16px * var(--scale));
    margin-bottom: calc(40px - 40px * var(--scale));
    background-color: ${({ theme }) => theme.colors.neutral["10"]};
    border: none;
    border-radius: 5px;

    /* Chrome, Firefox, Opera, Safari 10.1+ */
    ::placeholder {
      color: ${({ theme }) => theme.colors.neutral["50"]};
    }

    /* Internet Explorer 10-11 */
    :-ms-input-placeholder {
      color: ${({ theme }) => theme.colors.neutral["50"]};
    }

    /* Microsoft Edge */
    ::-ms-input-placeholder {
      color: ${({ theme }) => theme.colors.neutral["50"]};
    }

    &:focus {
      outline: none;
    }
  }
`;
