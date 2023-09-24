import styled from "@emotion/styled";
import { motion } from "framer-motion";

import BaseBackdrop from "../Backdrop";

export const Backdrop = styled(BaseBackdrop)`
  z-index: ${({ theme }) => theme.zIndex.bottomSheet};
`;

export const Container = styled(motion.div)<{ maxHeight: number | null }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 600px;
  border-radius: 20px 20px 0px 0px;
  background-color: #fff;
  will-change: height;
  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}px` : "none")};
  z-index: ${({ theme }) => theme.zIndex.bottomSheet};
`;

export const Handlebar = styled.div`
  min-height: 30px;
  cursor: grab;

  &::before {
    position: absolute;
    top: 14px;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    display: block;
    height: 4px;
    width: 40px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.neutral["30"]};
    box-shadow: inset 0px 0.5px 0.1px rgba(0, 0, 0, 0.06);
    transition: background-color 0.15s;
  }

  &:hover {
    &::before {
      background-color: ${({ theme }) => theme.colors.neutral["50"]};
    }
  }

  &:active {
    &::before {
      background-color: ${({ theme }) => theme.colors.neutral["50"]};
    }
  }
`;

export const Scroll = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
  padding: 8px 16px 24px;
`;

export const Footer = styled.div`
  padding: 24px;
  padding-top: 14px;
  border-top: solid 1px ${({ theme }) => theme.colors.neutral["10"]};
`;
