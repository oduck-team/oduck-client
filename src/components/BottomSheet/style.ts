import styled from "@emotion/styled";
import { motion } from "framer-motion";

import BaseBackdrop from "../Backdrop";

export const Backdrop = styled(BaseBackdrop)`
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.bottomSheet};
`;

export const Container = styled(motion.div)`
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 100lvh;
  width: 100%;
  max-width: 600px;
  background-color: #ffffff;
  border-radius: 20px 20px 0px 0px;
  overflow: hidden;
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
  }
`;

export const ContentContainer = styled.div`
  height: fit-content;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  padding-bottom: 250px; // mobile

  ${({ theme }) => theme.mq("sm")} {
    padding-bottom: 50px;
  }
`;

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 24px;
  padding-top: 14px;
  gap: 40px;
  min-height: fit-content;
  width: 100%;
  max-width: 600px;
  background-color: #ffffff;
  border-top: solid 1px ${({ theme }) => theme.colors.neutral["10"]};
  z-index: 1000;

  button {
    flex-shrink: 0;
  }
`;
