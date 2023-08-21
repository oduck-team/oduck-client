import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { BackdropProps } from ".";

export const Container = styled(motion.div)<BackdropProps>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;

  ${({ isVisible }) => css`
    background-color: ${isVisible ? "rgba(0, 0, 0, 0.3)" : "transparent"};
  `}
`;
