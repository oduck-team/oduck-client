import { UnstyledButton, Avatar, Text, Menu, Flex } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { CaretRight, SignOut } from "@phosphor-icons/react";
import { PropsWithChildren } from "react";

import useAuth from "@/features/auth/hooks/useAuth";

import classes from "./AdminProfile.module.css";

interface AdminProfileProps {
  name: string;
  image?: string;
}

export default function AdminProfile({ name, image }: AdminProfileProps) {
  return (
    <UserMenu>
      <UnstyledButton className={classes.profile}>
        <Flex align="center" gap="sm">
          <Avatar src={image ? image : "/logo/logo.png"} radius="xl" />

          <div style={{ flex: 1 }}>
            <Text size="xs" fw={500}>
              {name}
            </Text>
          </div>

          <CaretRight size={14} />
        </Flex>
      </UnstyledButton>
    </UserMenu>
  );
}

function UserMenu({ children }: PropsWithChildren) {
  const { logout } = useAuth();
  const { width } = useViewportSize();

  return (
    <Menu shadow="md" width={200} position={width > 768 ? "right" : "bottom"}>
      <Menu.Target>{children}</Menu.Target>

      <Menu.Dropdown>
        <Menu.Item leftSection={<SignOut />} onClick={logout}>
          로그아웃
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
