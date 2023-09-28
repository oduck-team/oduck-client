import Head from "@/components/Head";

import ProfileAvatar from "../../components/ProfileAvatar";
import ProfileImageSection from "../../components/ProfileImageSection";

import EditForm from "./EditForm";
import { ProfileEditContainer } from "./style";

export default function ProfileEdit() {
  return (
    <ProfileEditContainer>
      <Head title="오덕 | 프로필 수정" />
      <ProfileImageSection>
        <ProfileImageSection.Art src="https://newsimg.sedaily.com/2023/07/16/29S5JPWPBV_1.jpeg" />
        <ProfileImageSection.ArtEditButton />
        <ProfileImageSection.ProfileAvatar>
          <ProfileAvatar.Avatar userName="FE" size="xl" />
          <ProfileAvatar.AvatarEditButton />
        </ProfileImageSection.ProfileAvatar>
      </ProfileImageSection>

      <EditForm />
    </ProfileEditContainer>
  );
}
