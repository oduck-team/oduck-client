import styled from "@emotion/styled";

export const Container = styled.ul`
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
`;
