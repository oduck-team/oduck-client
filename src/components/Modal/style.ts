import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import BaseBackdrop from "../Backdrop";

import { ModalActionsProps, ModalProps, Size } from "./";

const sizes: Record<Size, SerializedStyles> = {
  default: css`
    --side-padding: 32px; // 16px * 2
    width: calc(100vw - var(--side-padding));
    max-width: calc(600px - var(--side-padding));
  `,
  sm: css`
    min-width: 240px;
  `,
  md: css`
    min-width: 368px;
  `,
  lg: css`
    min-width: 564px;
  `,
  xl: css`
    min-width: 760px;
  `,
};

export const Backdrop = styled(BaseBackdrop)`
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.modal};
`;

export const Container = styled(motion.div)<Pick<ModalProps, "size">>`
  position: fixed;
  top: 40%;
  border-radius: 4px;
  background-color: white;
  box-shadow:
    0px 10px 32px -4px rgba(24, 39, 75, 0.1),
    0px 6px 14px -6px rgba(24, 39, 75, 0.12);

  ${({ size = "default" }) => css`
    ${sizes[size]}
  `};
`;

export const ContentContainer = styled.div`
  padding: 16px 24px 12px 24px;
`;

export const ActionsContainer = styled.div<
  Pick<ModalActionsProps, "direction">
>`
  display: flex;
  gap: 8px;
  padding: 8px 16px 16px 16px;

  ${({ direction = "row" }) => css`
    flex-direction: ${direction === "row" ? "row" : "column"};
  `}
`;
