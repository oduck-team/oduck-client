import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { ModalProps, Size } from "./index";

const sizes: Record<Size, SerializedStyles> = {
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

export const Container = styled(motion.div)<Pick<ModalProps, "size">>`
  position: fixed;
  top: 40%;
  border-radius: 4px;
  background-color: white;
  box-shadow:
    0px 10px 32px -4px rgba(24, 39, 75, 0.1),
    0px 6px 14px -6px rgba(24, 39, 75, 0.12);

  ${({ size = "sm", theme }) => css`
    ${sizes[size]}
    z-dinex: ${theme.zIndex.modal}
  `}
`;
