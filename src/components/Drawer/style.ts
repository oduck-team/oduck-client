import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import BaseBackdrop from "../Backdrop";

import { Side } from "./useDrawer";

import { DrawerProps } from ".";

const positions: Record<Side, SerializedStyles> = {
  top: css`
    width: 100%;
    height: 470px;
    top: 0;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
  `,
  bottom: css`
    width: 100%;
    height: 470px;
    bottom: 0;
    top: auto;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
  `,
  left: css`
    width: 288px;
    height: 100vh;
    left: 0;
    top: 0;
    box-shadow: 5px 0px 15px 0px rgba(0, 0, 0, 0.1);
  `,
  right: css`
    width: 288px;
    height: 100%;
    top: 0;
    right: 0;
    box-shadow: -5px 0px 15px 0px rgba(0, 0, 0, 0.1);
  `,
};

export const Backdrop = styled(BaseBackdrop)`
  z-index: ${({ theme }) => theme.zIndex.drawer};
`;

export const DrawerContainer = styled(motion.div)<Pick<DrawerProps, "side">>`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutral["05"]};
  z-index: ${({ theme }) => theme.zIndex.drawer};

  ${({ side }) => positions[side]}
`;

export const Header = styled.div`
  display: flex;
  padding: 0.875rem;

  ${({ theme }) => theme.typo["title-3-b"]}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.875rem;
`;
