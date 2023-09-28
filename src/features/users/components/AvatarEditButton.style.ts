import styled from "@emotion/styled";
import { PlusCircle } from "@phosphor-icons/react";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.7;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  cursor: pointer;
`;

export const PlusCircleIcon = styled(PlusCircle)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
