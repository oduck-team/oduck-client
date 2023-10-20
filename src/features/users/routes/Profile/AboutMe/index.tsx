import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import Stat from "@/components/Stat";
import ProfileAvatar from "@/features/users/components/ProfileImageSection/ProfileAvatar";
import useIntroduceReadMore from "@/features/users/hooks/useIntroduceReadMore";

import ProfileImageSection from "../../../components/ProfileImageSection";

import StatModal from "./StatModal";
import { Introduce, NickName, SeeMoreButton, StatContainer } from "./style";

interface AboutMeProps {
  profile: Profile;
}

export default function AboutMe({
  profile: { activity, backgroundImage, description, isMine, name, thumbnail },
}: AboutMeProps) {
  const {
    isReadMore,
    isShowReadMoreButton,
    getIntroduceText,
    handleSeeMoreButtonToggle,
  } = useIntroduceReadMore(description);
  const [isStatModalVisible, setIsStatModalVisible] = useState(false);
  const handleStatModalToggle = () => setIsStatModalVisible((prev) => !prev);

  const statItemList = [
    { description: "리뷰", data: activity.reviews },
    { description: "입덕애니", data: activity.bookmarks },
    { description: "좋아요", data: activity.likes },
    { description: "포인트", data: activity.point },
  ];

  return (
    <>
      <ProfileImageSection>
        <ProfileImageSection.Art src={backgroundImage} />
        <ProfileImageSection.ProfileSetupButton isMine={isMine} />
        <ProfileImageSection.ProfileAvatar>
          <ProfileAvatar.Avatar src={thumbnail} userName={name} size="xl" />
        </ProfileImageSection.ProfileAvatar>
      </ProfileImageSection>

      <NickName>{name}</NickName>
      <Introduce isReadMore={isReadMore}>{getIntroduceText}</Introduce>

      {isShowReadMoreButton && (
        <SeeMoreButton onClick={handleSeeMoreButtonToggle}>
          {isReadMore ? "더보기" : "접기"}
        </SeeMoreButton>
      )}

      <StatContainer onClick={handleStatModalToggle}>
        <Stat variant="ghost" items={statItemList} />
      </StatContainer>
      <AnimatePresence>
        {isStatModalVisible && (
          <StatModal onClose={handleStatModalToggle} items={statItemList} />
        )}
      </AnimatePresence>
    </>
  );
}
