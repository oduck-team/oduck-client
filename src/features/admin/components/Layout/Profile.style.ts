import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { ProfileProps } from "./Profile";

export const Container = styled.div<ProfileProps>`
  display: flex;
  flex-direction: column;
  transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${({ isVisible }) => css`
    opacity: ${isVisible ? 1 : 0};
  `}
`;
