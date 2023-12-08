import styled from "@emotion/styled";

export const SocialGroupContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const SocialButton = styled.button<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 999px;
  background-color: ${({ color }) => color};
  cursor: pointer;

  & > span {
    display: none;
  }

  &:disabled {
    filter: grayscale(1);
    opacity: 0.3;
  }
`;

export const InAppBrowser = styled.p`
  margin-top: 8px;
  width: 300px;
  ${({ theme }) => theme.typo["body-3-r"]}
  color: ${({ theme }) => theme.colors.neutral[80]}
`;
