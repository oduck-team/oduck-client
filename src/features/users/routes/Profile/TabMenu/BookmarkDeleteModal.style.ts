import styled from "@emotion/styled";
import { X } from "@phosphor-icons/react";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
export const CloseButton = styled(X)`
  position: relative;
  right: -8px;
  align-self: flex-end;
  margin-bottom: 16px;
`;
export const Title = styled.h3`
  ${({ theme }) => theme.typo["body-3-r"]}
`;
