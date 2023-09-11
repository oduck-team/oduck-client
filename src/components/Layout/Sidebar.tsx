import { Cancel, ProfileCircle } from "iconoir-react";

import Avatar from "../Avatar";
import Button from "../Button";
import Drawer from "../Drawer";

import Menus from "./Menus";
import { Profile, UserName, NeedLogin } from "./Sidebar.style";

interface SidebarProps {
  isVisible: boolean;
  userName?: string;
  userImage?: string;
  onClose: () => void;
  onClickProfile: (e: React.MouseEvent) => void;
}

export default function Sidebar({
  isVisible,
  userName,
  userImage,
  onClose,
  onClickProfile,
}: SidebarProps) {
  return (
    <Drawer
      position="right"
      isVisible={isVisible}
      title={
        <Button
          icon={<Cancel />}
          name="메뉴 닫기"
          styleType="text"
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
        <Profile onClick={onClickProfile}>
          {/* 로그인 */}
          {userName && (
            <>
              <Avatar
                userName={userName ? userName : ""}
                src={userImage}
                size="xl"
              />
              <UserName>{userName}</UserName>
            </>
          )}
          {/* 미로그인 */}
          {!userName && (
            <>
              <ProfileCircle height={56} width={56} color="#ccc" />
              <NeedLogin>로그인이 필요해요</NeedLogin>
            </>
          )}
        </Profile>
      </div>
      <Menus />
    </Drawer>
  );
}
