import { SerializedStyles, css } from "@emotion/react";
import styled from "@emotion/styled";

import BaseBackdrop from "../Backdrop";

import { DrawerProps, Position } from ".";

const positions: Record<Position, SerializedStyles> = {
  top: css`
    width: 100%;
    height: 470px;
    top: 0;
    left: 0;
    box-shadow:
      0px 5px 15px 0px rgba(0, 0, 0, 0.1),
      0px 3px 6px 0px rgba(0, 0, 0, 0.05);
  `,
  bottom: css`
    width: 100%;
    height: 470px;
    bottom: 0;
    left: 0;
    box-shadow:
      0px -5px 15px 0px rgba(0, 0, 0, 0.1),
      0px -3px 6px 0px rgba(0, 0, 0, 0.05);
  `,
  left: css`
    width: 288px;
    height: 100vh;
    top: 0;
    left: 0;
    box-shadow:
      -5px 0px 15px 0px rgba(0, 0, 0, 0.1),
      -3px 0px 6px 0px rgba(0, 0, 0, 0.05);
  `,
  right: css`
    width: 288px;
    height: 100%;
    top: 0;
    right: 0;
    box-shadow:
      5px 0px 15px 0px rgba(0, 0, 0, 0.1),
      3px 0px 6px 0px rgba(0, 0, 0, 0.05);
  `,
};

export const Backdrop = styled(BaseBackdrop)`
  z-index: ${({ theme }) => theme.zIndex.drawer};
`;

export const Container = styled.div<Pick<DrawerProps, "position">>`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: white;

  ${({ position }) => positions[position]}
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