import { Button } from "antd";
import { NavArrowLeft, NavArrowRight } from "iconoir-react";

import { Container } from "./SidebarToggle.style";

export interface SidebarToggleProps {
  readonly width: number;
  readonly collapsedWidth: number;
  readonly isCollapsed: boolean;
  readonly onClick?: () => void;
}

export default function SidebarToggle({
  width,
  collapsedWidth,
  isCollapsed,
  onClick,
}: SidebarToggleProps) {
  return (
    <Container
      width={width}
      collapsedWidth={collapsedWidth}
      isCollapsed={isCollapsed}
    >
      <Button
        type="default"
        size="large"
        onClick={onClick}
        style={{ display: "flex", alignItems: "center" }}
      >
        {isCollapsed ? <NavArrowRight /> : <NavArrowLeft />}
      </Button>
    </Container>
  );
}
