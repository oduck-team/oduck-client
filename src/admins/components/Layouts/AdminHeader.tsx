import {
  Container,
  Burger,
  Image,
  useMantineTheme,
  Text,
  Group,
} from "@mantine/core";
import { Link } from "react-router-dom";

import classes from "./AdminHeader.module.css";
import AdminThemeSwitch from "./AdminThemeSwitch";

interface HeaderProps {
  isNavbarCollapsed: boolean;
  onClickMenu: () => void;
}

export default function Header({
  isNavbarCollapsed,
  onClickMenu,
}: HeaderProps) {
  const theme = useMantineTheme();

  return (
    <Container
      size="lg"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Group>
        <Burger
          hiddenFrom="sm"
          opened={isNavbarCollapsed}
          onClick={onClickMenu}
          size="sm"
          mr="xs"
          color={theme.colors.gray[6]}
        />
        <h1 className={classes.oduck}>
          <Image src="/logo/logo.png" height={36} width={36} alt="로고" />
          <Link to="/">
            <Text>ODuck</Text>
          </Link>
        </h1>
      </Group>
      <AdminThemeSwitch />
    </Container>
  );
}
