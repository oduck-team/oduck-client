import styled from "@emotion/styled";

export const SearchbarContainer = styled.div<{ isButtonVisible: boolean }>`
  position: relative;
  width: 100%;

  & > svg {
    position: absolute;
    top: 10px;
    left: 8px;
    color: ${({ theme }) => theme.colors.neutral["60"]};
  }

  & form {
    display: flex;
    align-items: center;
  }

  & label {
    display: none;
  }

  & input[type="text"] {
    display: inline-flex;
    align-items: center;
    height: 40px;
    width: 100%;
    padding-left: 36px;
    padding-right: 16px;
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
