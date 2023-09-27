import Avatar from "@/components/Avatar";

import { AvatarContainer, ImageContainer } from "../Profile/AboutMe.style";
import ProfileArt from "../Profile/ProfileArt";

import EditForm from "./EditForm";
import { ProfileEditContainer } from "./style";

export default function ProfileEdit() {
  return (
    <ProfileEditContainer>
      <ImageContainer>
        <ProfileArt src="https://newsimg.sedaily.com/2023/07/16/29S5JPWPBV_1.jpeg" />
        <AvatarContainer>
          <Avatar userName="FE" size="xl" />
        </AvatarContainer>
      </ImageContainer>
      <EditForm />
    </ProfileEditContainer>
  );
}
