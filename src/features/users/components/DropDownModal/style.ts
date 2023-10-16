import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ButtonContainer = styled(motion.div)`
  --side-padding: 32px;
  --bottom-navigation-height: 66px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  bottom: var(--bottom-navigation-height);
  width: calc(100vw - var(--side-padding));
  max-width: calc(600px - var(--side-padding));
  gap: 8px;
  z-index: ${({ theme }) => theme.zIndex.modal};

  & > button {
    ${({ theme }) => theme.typo["body-2-r"]}
    background-color: ${({ theme }) => theme.colors.neutral["05"]};
  }
`;
