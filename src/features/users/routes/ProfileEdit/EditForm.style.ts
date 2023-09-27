import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface TitleProps {
  isRequired?: boolean;
}

export const EditFormContainer = styled.div`
  --profile-art-height: 205px; // 160px + 45px
  --bottom-navigation-height: 74px; // 66px + 8px
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(
    100vh - var(--profile-art-height) - var(--bottom-navigation-height)
  );
  padding: 24px 16px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
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

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
