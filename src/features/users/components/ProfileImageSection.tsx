import { StrictPropsWithChildren } from "@/types";

import ProfileArt from "./ProfileArt";
import ArtEditButton from "./ProfileArtEditButton";
import ProfileAvatar from "./ProfileAvatar";
import { ProfileImageSectionContainer } from "./ProfileImageSection.style";
import ProfileSetupButton from "./ProfileSetupButton";

export default function ProfileImageSection({
  children,
}: StrictPropsWithChildren) {
  return (
    <ProfileImageSectionContainer>{children}</ProfileImageSectionContainer>
  );
}

ProfileImageSection.Art = ProfileArt; // 프로필 배경
ProfileImageSection.ArtEditButton = ArtEditButton; // 프로필 배경 수정 버튼
ProfileImageSection.ProfileSetupButton = ProfileSetupButton; // 프로필 설정 버튼

ProfileImageSection.ProfileAvatar = ProfileAvatar; // 프로필 아바타
