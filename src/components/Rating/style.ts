import styled from "@emotion/styled";

import { RatingProps, Size } from ".";

interface ColorStarProps {
  width: number;
}

export const Sizes: Record<Size, number> = {
  sm: 16,
  md: 24,
  lg: 36,
};

export const Container = styled.div<RatingProps>`
  --size: ${({ size = "md" }) => Sizes[size] + "px"};
  width: calc(var(--size) * 5);
  position: relative;
  cursor: ${({ readonly }) => (readonly ? "default" : "pointer")};
  svg {
    width: var(--size);
    height: var(--size);
  }
`;

export const EventContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  touch-action: pan-x;
  z-index: ${({ theme }) => theme.zIndex.rating + 1};
`;

export const ColorStarContainer = styled.div<ColorStarProps>`
  width: ${({ width }) => width + "%"};
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
  z-index: ${({ theme }) => theme.zIndex.rating};
  & > svg {
    fill: ${({ theme }) => theme.colors["secondary"]["50"]};
    color: ${({ theme }) => theme.colors["secondary"]["50"]};
  }
`;

export const BackStarContainer = styled.div`
  width: 100%;
  height: 100%;
  & > svg {
    fill: ${({ theme }) => theme.colors["neutral"]["30"]};
    color: ${({ theme }) => theme.colors["neutral"]["30"]};
  }
`;
