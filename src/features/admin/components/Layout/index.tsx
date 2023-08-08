import { Layout as Container } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

export default function Layout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <Container style={{ minHeight: "100vh" }}>
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={handleSidebar}
      />
      <Container.Content>
        <Outlet />
      </Container.Content>
    </Container>
  );
}
