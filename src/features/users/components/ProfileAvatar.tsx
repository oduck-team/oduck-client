import Avatar from "@/components/Avatar";
import { StrictPropsWithChildren } from "@/types";

import { AvatarContainer } from "./ProfileAvatar.style";

export default function ProfileAvatar({ children }: StrictPropsWithChildren) {
  return <AvatarContainer>{children}</AvatarContainer>;
}

ProfileAvatar.Avatar = Avatar;
