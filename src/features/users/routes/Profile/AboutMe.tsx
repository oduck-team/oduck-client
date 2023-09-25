import Avatar from "@/components/Avatar";
import Stat from "@/components/Stat";

import {
  AvatarContainer,
  ImageContainer,
  Introduce,
  NickName,
  SeeMoreButton,
  StatContainer,
} from "./AboutMe.style";
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
      <NickName>사용자닉네임</NickName>
      <Introduce>
        자기소개가 들어갈 자리! 자기소개가 들어갈 자리! 자기소개가 들어갈 자리!
        자기소개가 들어갈 자리! 자기소개가 들어갈 자리! 자기소개가 들어갈 자리!
        자기소개가 들어갈 자리! 자기소개가 들어갈 자리! 자기소개가 들어갈 자리!
      </Introduce>
      <SeeMoreButton>더보기</SeeMoreButton>
      <StatContainer>
        <Stat
          variant="ghost"
          items={[
            { data: "123", description: "리뷰" },
            { data: "123", description: "스레드" },
            { data: "123", description: "좋아요" },
            { data: "7.1k", description: "포인트" },
          ]}
        />
      </StatContainer>
    </>
  );
}
