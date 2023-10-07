import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import Stat from "@/components/Stat";
import ProfileAvatar from "@/features/users/components/ProfileImageSection/ProfileAvatar";
import useIntroduceReadMore from "@/features/users/hooks/useIntroduceReadMore";

import ProfileImageSection from "../../../components/ProfileImageSection";

import StatModal from "./StatModal";
import { Introduce, NickName, SeeMoreButton, StatContainer } from "./style";

const STAT_MOCK_DATA = [
  { data: 12500, description: "리뷰" },
  { data: 1000000, description: "스레드" },
  { data: 123, description: "좋아요" },
  { data: 7100, description: "포인트" },
];
const USER_MOCK_DATA = { isMine: false };
const INTRODUCE_MOCK_DATA =
  "자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개";

export default function AboutMe() {
  const {
    isReadMore,
    isShowReadMoreButton,
    getIntroduceText,
    handleSeeMoreButtonToggle,
  } = useIntroduceReadMore(INTRODUCE_MOCK_DATA);
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
      <Introduce isReadMore={isReadMore}>{getIntroduceText}</Introduce>

      {isShowReadMoreButton && (
        <SeeMoreButton onClick={handleSeeMoreButtonToggle}>
          {isReadMore ? "더보기" : "접기"}
        </SeeMoreButton>
      )}

      <StatContainer onClick={handleStatModalToggle}>
        <Stat variant="ghost" items={STAT_MOCK_DATA} />
      </StatContainer>
      <AnimatePresence>
        {isStatModalVisible && (
          <StatModal onClose={handleStatModalToggle} items={STAT_MOCK_DATA} />
        )}
      </AnimatePresence>
    </>
  );
}
