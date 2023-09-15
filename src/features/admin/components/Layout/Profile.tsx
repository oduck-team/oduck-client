import { Menu, Button, Flex } from "@mantine/core";
import { LogOut } from "iconoir-react";
import { useNavigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";

import Logo from "../Logo";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Flex align="center" gap="sm">
      <Logo size={48} />
      <Menu shadow="md" width={200} position="bottom-start">
        <Menu.Target>
          <Button variant="default" color="dark" radius="md" compact>
            {user.name}
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item color="red" icon={<LogOut />} onClick={handleLogout}>
            로그아웃
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Flex>
  );
}
