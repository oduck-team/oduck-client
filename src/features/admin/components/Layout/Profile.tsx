import styled from "@emotion/styled";
import { Button, Dropdown, MenuProps } from "antd";
import { LogOut } from "iconoir-react";

const Container = styled.div<ProfileProps>(
  {
    display: "flex",
    flexDirection: "column",
    transition: "opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
  },
  ({ isVisible }) => ({
    opacity: isVisible ? 1 : 0,
  }),
);

interface ProfileProps {
  readonly isVisible: boolean;
}

export default function Profile({ isVisible }: ProfileProps) {
  const handleLogout = () => {};

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a tabIndex={0} role="button" onClick={handleLogout}>
          로그아웃
        </a>
      ),
      icon: <LogOut />,
    },
  ];

  return (
    <Container isVisible={isVisible}>
      {/* TODO 관리자 -> 타이포그래피 컴포넌트 */}
      <div>관리자</div>
      <div>
        <Dropdown menu={{ items }} trigger={["click", "hover"]}>
          <Button type="text" size="small">
            username
          </Button>
        </Dropdown>
      </div>
    </Container>
  );
}
