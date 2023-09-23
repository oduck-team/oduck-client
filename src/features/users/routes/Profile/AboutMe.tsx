import Avatar from "@/components/Avatar";

import { AvatarContainer, ImageContainer } from "./AboutMe.style";
import ProfileArt from "./ProfileArt";
import ProfileButton from "./ProfileButton";

export default function AboutMe() {
  return (
    <>
      <ImageContainer>
        <ProfileButton />
        <ProfileArt src="https://newsimg.sedaily.com/2023/07/16/29S5JPWPBV_1.jpeg" />
        <AvatarContainer>
          <Avatar userName="FE" size="xl" />
        </AvatarContainer>
      </ImageContainer>
    </>
  );
}
