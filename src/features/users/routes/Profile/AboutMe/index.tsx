import { useState } from "react";

import Stat from "@/components/Stat";
import ProfileAvatar from "@/features/users/components/ProfileImageSection/ProfileAvatar";

import ProfileImageSection from "../../../components/ProfileImageSection";

import StatModal from "./StatModal";
import { Introduce, NickName, SeeMoreButton, StatContainer } from "./style";

const STAT_MOCK_DATA = [
  { data: "12500", description: "리뷰" },
  { data: "1000000", description: "스레드" },
  { data: "123", description: "좋아요" },
  { data: "7100", description: "포인트" },
];

const USER_MOCK_DATA = { isMine: false };

export default function AboutMe() {
  const [isStatModalVisible, setIsStatModalVisible] = useState(false);
  const handleStatModalToggle = () => setIsStatModalVisible((prev) => !prev);

  return (
    <>
      <ProfileImageSection>
        <ProfileImageSection.Art src="https://newsimg.sedaily.com/2023/07/16/29S5JPWPBV_1.jpeg" />
        <ProfileImageSection.ProfileSetupButton
          isMine={USER_MOCK_DATA.isMine}
        />
        <ProfileImageSection.ProfileAvatar>
          <ProfileAvatar.Avatar userName="FE" size="xl" />
        </ProfileImageSection.ProfileAvatar>
      </ProfileImageSection>

      <NickName>사용자닉네임</NickName>
      <Introduce>
        자기소개가 들어갈 자리! 자기소개가 들어갈 자리! 자기소개가 들어갈 자리!
        자기소개가 들어갈 자리! 자기소개가 들어갈 자리! 자기소개가 들어갈 자리!
        자기소개가 들어갈 자리! 자기소개가 들어갈 자리! 자기소개가 들어갈 자리!
      </Introduce>
      <SeeMoreButton>더보기</SeeMoreButton>

      <StatContainer onClick={handleStatModalToggle}>
        <Stat variant="ghost" items={STAT_MOCK_DATA} />
      </StatContainer>
      <StatModal
        isVisible={isStatModalVisible}
        onClose={handleStatModalToggle}
        items={STAT_MOCK_DATA}
      />
    </>
  );
}
