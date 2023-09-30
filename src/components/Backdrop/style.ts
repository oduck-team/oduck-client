import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { BackdropProps } from ".";

export const BackdropContainer = styled(motion.div)<BackdropProps>`
  position: fixed;
  display: flex;
  inset: 0;

  ${({ isVisible }) => css`
    background-color: ${isVisible ? "rgba(0, 0, 0, 0.3)" : "transparent"};
  `}
`;
