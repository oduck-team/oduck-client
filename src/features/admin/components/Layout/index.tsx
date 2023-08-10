import { Layout as Container } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import MobileNavigation from "./MobileNavigation";
import Sidebar from "./Sidebar";

export default function Layout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

  const handleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleMobileMenu = () => {
    if (isShowMobileMenu) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
    setIsShowMobileMenu(!isShowMobileMenu);
  };

  return (
    <Container style={{ minHeight: "100vh" }}>
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={handleSidebar}
      />
      <Container.Content>
        <MobileNavigation
          isActive={isShowMobileMenu}
          setIsActive={handleMobileMenu}
        />
        <Outlet />
      </Container.Content>
    </Container>
  );
}
