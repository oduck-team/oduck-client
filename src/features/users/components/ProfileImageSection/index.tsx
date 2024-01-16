import { StrictPropsWithChildren } from "@/types";

import ProfileArt from "./ProfileArt";
import ProfileAvatar from "./ProfileAvatar";
import ProfileSetupButton from "./ProfileSetupButton";
import { ProfileImageSectionContainer } from "./style";

export default function ProfileImageSection({
  children,
}: StrictPropsWithChildren) {
  return (
    <ProfileImageSectionContainer>{children}</ProfileImageSectionContainer>
  );
}

ProfileImageSection.Art = ProfileArt; // 프로필 배경
ProfileImageSection.ProfileSetupButton = ProfileSetupButton; // 프로필 설정 버튼
ProfileImageSection.ProfileAvatar = ProfileAvatar; // 프로필 아바타
