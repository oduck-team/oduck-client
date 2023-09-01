import {
  AppShell,
  Burger,
  Container,
  Flex,
  Header,
  MediaQuery,
  useMantineTheme,
} from "@mantine/core";
import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

const SIDEBAR_WIDTH = 256;

export default function Layout() {
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <Suspense fallback={"로딩"}>
      <AppShell
        padding="md"
        navbarOffsetBreakpoint="sm"
        navbar={
          <Sidebar
            width={{ base: "100%", sm: SIDEBAR_WIDTH }}
            p="sm"
            hiddenBreakpoint="sm"
            hidden={!isNavbarOpened}
          />
        }
        header={
          <Header height={{ base: 48, md: 56 }} p="md">
            <Flex
              align="center"
              justify="space-between"
              style={{ height: "100%" }}
            >
              <h1>Oduck</h1>
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={isNavbarOpened}
                  onClick={() => setIsNavbarOpened((prev) => !prev)}
                  size="sm"
                  mr="xl"
                  color={theme.colors.gray[6]}
                />
              </MediaQuery>
            </Flex>
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
            transition: "padding 0.2s",
          },
        })}
      >
        <Container size="xl">
          <Outlet />
        </Container>
      </AppShell>
    </Suspense>
  );
}
