import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { ModalActionsProps } from "./ModalActions";

export const ModalActionsContainer = styled.div<
  Pick<ModalActionsProps, "direction">
>`
  display: flex;
  gap: 8px;
  padding: 8px 16px 16px 16px;

  ${({ direction = "row" }) => css`
    flex-direction: ${direction === "row" ? "row" : "column"};
  `}
`;
