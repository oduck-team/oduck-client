import {
  Headset,
  MegaphoneSimple,
  SignOut,
  TelevisionSimple,
  User,
  UserCircle,
  X,
} from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import useAuth from "@/hooks/useAuth";

import Avatar from "../Avatar";
import Button from "../Button";
import Drawer from "../Drawer";

import Navigation from "./Navigation";
import { NavItem } from "./Navigation/NavigationItem";
import { Divider, NeedLogin, Profile, UserName } from "./Sidebar.style";

const userMenuItems: NavItem[] = [
  {
    id: "profile",
    title: "프로필",
    to: "/profile",
    icon: <User />,
  },
  {
    id: "bookmark",
    title: "입덕 애니",
    to: "/profile",
    icon: <TelevisionSimple />,
  },
];

const helpMenuItems: NavItem[] = [
  {
    id: "notice",
    title: "공지사항",
    to: "/notices",
    icon: <MegaphoneSimple />,
  },
  {
    id: "helpdesk",
    title: "고객센터",
    to: "/helpdesk",
    icon: <Headset />,
  },
];

interface SidebarProps {
  isVisible: boolean;
  onClickItem: () => void;
  onClose: () => void;
}

export default function Sidebar({
  isVisible,
  onClickItem,
  onClose,
}: SidebarProps) {
  const { user, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleClickUserMenu = (id: string, e: React.MouseEvent) => {
    e.preventDefault();

    if (!isLoggedIn) navigate("/login", { replace: true });

    const foundItem = userMenuItems.find((item) => item.id === id);

    if (foundItem) {
      onClickItem();
      if (foundItem.id === "bookmark") {
        navigate(foundItem.to, {
          state: `bookmark ${uuidv4()}`,
        });
      } else {
        navigate(foundItem.to);
      }
    }
  };

  const handleLogout = (_id: string, e: React.MouseEvent) => {
    e.preventDefault();
    logout();
  };

  return (
    <Drawer
      side="right"
      isVisible={isVisible}
      title={
        <Button
          icon={<X />}
          name="메뉴 닫기"
          variant="text"
          color="neutral"
          onClick={onClose}
        />
      }
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
              <UserCircle size={56} weight="fill" color="#ccc" />
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
            <Navigation.Item key={item.id} item={item} onClick={onClickItem} />
          ))}
          {isLoggedIn && (
            <Navigation.Item
              item={{
                id: "logout",
                title: "로그아웃",
                to: "/logout",
                icon: <SignOut />,
              }}
              onClick={handleLogout}
            ></Navigation.Item>
          )}
        </Navigation.Content>
      </Navigation>
    </Drawer>
  );
}
