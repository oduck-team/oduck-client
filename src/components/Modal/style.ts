import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import BaseBackdrop from "../Backdrop";

import { ModalProps, Size } from "./";

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

export const ModalContainer = styled(motion.div)<
  Pick<ModalProps, "size" | "overflowY">
>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px;
  background-color: #fff;
  box-shadow:
    0px 10px 32px -4px rgba(24, 39, 75, 0.1),
    0px 6px 14px -6px rgba(24, 39, 75, 0.12);
  z-index: ${({ theme }) => theme.zIndex.modal};
  overflow-y: auto;
  max-height: calc(100vh - 16px);

  ${({ size = "default", overflowY }) => {
    const modalSize = sizes[size];
    const modalOverflowY =
      overflowY === "visible" &&
      css`
        overflow-y: visible;
      `;

    return css`
      ${modalSize} ${modalOverflowY}
    `;
  }}
`;
