import styled from "@emotion/styled";
import {
  Cancel,
  HeadsetHelp,
  LogOut,
  Megaphone,
  PeopleTag,
  ProfileCircle,
  Tv,
} from "iconoir-react";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";

import Avatar from "../Avatar";
import Button from "../Button";
import Drawer from "../Drawer";

import Navigation from "./Navigation";
import { NavItem } from "./Navigation/NavigationItem";

const userMenuItems: NavItem[] = [
  {
    id: "profile",
    title: "프로필",
    to: "/profile",
    icon: <PeopleTag />,
  },
  {
    id: "bookmark",
    title: "입덕 애니",
    to: "/my-animations",
    icon: <Tv />,
  },
];

const helpMenuItems: NavItem[] = [
  {
    id: "notice",
    title: "공지사항",
    to: "/notices",
    icon: <Megaphone />,
  },
  {
    id: "helpdesk",
    title: "고객센터",
    to: "/helpdesk",
    icon: <HeadsetHelp />,
  },
];

interface SidebarProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function Sidebar({ isVisible, onClose }: SidebarProps) {
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleClickUserMenu = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (!isLoggedIn) navigate("/login", { replace: true });
    const foundItem = userMenuItems.find((item) => item.id === id);
    if (foundItem) navigate(foundItem.to);
  };

  const handleLogout = (_id: string, e: React.MouseEvent) => {
    e.preventDefault();
    logout();
  };

  return (
    <Drawer
      position="right"
      isVisible={isVisible}
      title={
        <Button
          icon={<Cancel />}
          name="메뉴 닫기"
          variant="text"
          color="neutral"
          onClick={onClose}
        />
      }
      style={{
        borderTopLeftRadius: "20px",
        borderBottomLeftRadius: "20px",
      }}
      onClose={onClose}
    >
      <div>
        {isLoggedIn && (
          <>
            <Profile to="/profile">
              <Avatar
                userName={user.name ? user.name : ""}
                src={user.imageUrl}
                size="xl"
              />
              <UserName>{user.name}</UserName>
            </Profile>
          </>
        )}
        {!isLoggedIn && (
          <>
            <Profile to="/login">
              <ProfileCircle height={56} width={56} color="#ccc" />
              <NeedLogin>로그인이 필요해요</NeedLogin>
            </Profile>
          </>
        )}
      </div>
      <Navigation>
        <Navigation.Content>
          {userMenuItems.map((item) => (
            <Navigation.Item
              key={item.id}
              item={item}
              onClick={handleClickUserMenu}
            />
          ))}
        </Navigation.Content>
        <Divider />
        <Navigation.Content>
          {helpMenuItems.map((item) => (
            <Navigation.Item key={item.id} item={item} />
          ))}
          {isLoggedIn && (
            <Navigation.Item
              item={{
                id: "logout",
                title: "로그아웃",
                to: "/logout",
                icon: <LogOut />,
              }}
              onClick={handleLogout}
            ></Navigation.Item>
          )}
        </Navigation.Content>
      </Navigation>
    </Drawer>
  );
}

const Profile = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 10px 0;
  cursor: pointer;
`;

const UserName = styled.span`
  ${({ theme }) => theme.typo["title-2-b"]}
`;

const NeedLogin = styled.span`
  ${({ theme }) => theme.typo["title-2-m"]}
  color: ${({ theme }) => theme.colors.neutral["50"]};
`;

const Divider = styled.div`
  margin: 1rem 0;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.neutral["30"]};
`;
