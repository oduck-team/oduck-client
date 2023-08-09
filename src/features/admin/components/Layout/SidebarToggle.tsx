import styled from "@emotion/styled";
import { Button } from "antd";
import { NavArrowLeft, NavArrowRight } from "iconoir-react";

const Container = styled.div<SidebarToggleProps>(
  {
    position: "fixed",
    bottom: "0",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    transition: "all 0.2s",
  },
  ({ isCollapsed, width, collapsedWidth }) => ({
    width: isCollapsed ? collapsedWidth : width,
  }),
);

interface SidebarToggleProps {
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
