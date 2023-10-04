import { SlidersHorizontal } from "@phosphor-icons/react";

import Button from "@/components/Button";
import Header from "@/components/Layout/Header";
import { TabItem } from "@/components/Tabs";
import AnimationCard from "@/features/animations/components/AnimationCard";
import { Animation } from "@/features/animations/components/AnimationCarousel";

import { useFilterAnimations } from "../../hooks/useFilterAnimations";

import Filter from "./Filter";
import { AnimationListContainer, Tabs, Content } from "./style";

const TabItems: TabItem[] = [
  {
    id: "latest",
    title: "최신순",
  },
  {
    id: "reviewCounts",
    title: "리뷰순",
  },
  {
    id: "ratings",
    title: "평점순",
  },
];

export default function AnimationList() {
  const {
    bottomSheetVisible,
    bottomSheetOpen,
    bottomSheetClose,
    filterOptions,
    filtered,
    handleOptionClick,
    resetFilter,
    handleOkClick,
  } = useFilterAnimations();

  const CardAni: Omit<Animation, "review"> = {
    id: "234567",
    title: "원피스",
    image: "https://url.kr/2y9rgl",
    rating: 4.8,
  };
  const CardAni2: Omit<Animation, "review"> = {
    id: "234568",
    title:
      "레벨 1이지만 유니크 스킬로 최강이 되었습니다 레벨 1이지만 유니크 스킬로 최강이 되었습니다",
    image: "https://url.kr/2y9rgl",
    rating: 4.5,
  };

  return (
    <AnimationListContainer>
      <Header>
        <Header.Left />
        <Header.Center>
          <h1>애니</h1>
        </Header.Center>
        <Header.Right>
          <Button
            name="필터"
            icon={<SlidersHorizontal />}
            variant="text"
            color="neutral"
            onClick={bottomSheetOpen}
          ></Button>
        </Header.Right>
      </Header>
      <Tabs items={TabItems} defaultActiveId={"latest"} />
      <Content>
        <AnimationCard size="lg" ani={CardAni} />
        <AnimationCard size="lg" ani={CardAni2} />
        <AnimationCard size="lg" ani={CardAni} />
        <AnimationCard size="lg" ani={CardAni2} />
      </Content>
      <Filter
        isVisible={bottomSheetVisible}
        onClose={bottomSheetClose}
        filterOptions={filterOptions}
        filtered={filtered}
        handleOptionClick={handleOptionClick}
        resetFilter={resetFilter}
        handleOkClick={handleOkClick}
      />
    </AnimationListContainer>
  );
}
