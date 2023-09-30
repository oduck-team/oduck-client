import Avatar from "@/components/Avatar";
import { StrictPropsWithChildren } from "@/types";

import AvatarEditButton from "./AvatarEditButton";
import { ProfileAvatarContainer } from "./ProfileAvatar.style";

export default function ProfileAvatar({ children }: StrictPropsWithChildren) {
  return <ProfileAvatarContainer>{children}</ProfileAvatarContainer>;
}

ProfileAvatar.Avatar = Avatar;
ProfileAvatar.AvatarEditButton = AvatarEditButton;
