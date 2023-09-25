import styled from "@emotion/styled";

export const ButtonContainer = styled.button`
  position: absolute;
  top: 29px;
  right: 18px;
  width: 28px;
  height: 28px;
  border: 0;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  opacity: 50%;
  cursor: pointer;
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

export const Dot = styled.span`
  display: block;
  width: 4px;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.neutral[30]};
  border-radius: 50%;
`;
