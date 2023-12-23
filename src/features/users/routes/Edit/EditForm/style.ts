import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface TitleProps {
  isRequired?: boolean;
}

export const EditFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  --profile-art-height: 160px;
  --input-section-margin-bottom: 16px;

  display: flex;
  flex-direction: column;
  min-height: calc(
    100vh - var(--profile-art-height) - var(--input-section-margin-bottom)
  );
`;

export const FileInput = styled.input`
  display: none;
`;

export const Title = styled.span<TitleProps>`
  ${({ theme }) => theme.typo["body-1-m"]}
  display: inline-block;
  margin-bottom: 8px;

  ${({ theme, isRequired }) =>
    isRequired &&
    css`
      &::after {
        content: "*";
        color: ${theme.colors.primary[60]};
        margin-left: 4px;
      }
    `}
`;

export const InputSection = styled.div`
  --margin-top: 60px;

  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0px 16px;
  margin: var(--margin-top) 0 var(--input-section-margin-bottom);
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0px 16px;
`;
