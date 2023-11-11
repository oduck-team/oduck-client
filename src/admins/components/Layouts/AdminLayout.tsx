import { AppShell, Container } from "@mantine/core";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import useAuth from "@/features/auth/hooks/useAuth";

import AdminHeader from "./AdminHeader";
import classes from "./AdminLayout.module.css";
import AdminNavList from "./AdminNavList";

const NAVBAR_WIDTH = 256;

export default function AdminLayout() {
  const { user } = useAuth();
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false); // navbar 접힘
  const { pathname } = useLocation();

  useEffect(() => {
    setIsNavbarCollapsed(false);
  }, [pathname]);

  return (
    <AppShell
      padding="md"
      header={{ height: 56 }}
      navbar={{
        width: { base: "100%", sm: NAVBAR_WIDTH },
        breakpoint: "sm",
        collapsed: {
          mobile: !isNavbarCollapsed,
        },
      }}
    >
      <AppShell.Header>
        <AdminHeader
          isNavbarCollapsed={isNavbarCollapsed}
          onClickMenu={() => setIsNavbarCollapsed((prev) => !prev)}
        />
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <AdminNavList userName={user?.name ?? ""} userImage={user?.thumbnail} />
      </AppShell.Navbar>

      <AppShell.Main className={classes.main}>
        <Container size="xl">
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
