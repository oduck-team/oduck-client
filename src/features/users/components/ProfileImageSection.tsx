import { StrictPropsWithChildren } from "@/types";

import ProfileArt from "./ProfileArt";
import ProfileAvatar from "./ProfileAvatar";
import { ImageContainer } from "./ProfileImageSection.style";
import ProfileSetupButton from "./ProfileSetupButton";

export default function ProfileImageSection({
  children,
}: StrictPropsWithChildren) {
  return <ImageContainer>{children}</ImageContainer>;
}

ProfileImageSection.Art = ProfileArt; // 프로필 배경
ProfileImageSection.ProfileSetupButton = ProfileSetupButton; // 프로필 설정 버튼
ProfileImageSection.ProfileAvatar = ProfileAvatar; // 프로필 아바타
