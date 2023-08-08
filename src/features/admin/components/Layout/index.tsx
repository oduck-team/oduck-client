import { Layout as Container } from "antd";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Container.Content>
        <Outlet />
      </Container.Content>
    </Container>
  );
}
