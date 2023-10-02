import { SlidersHorizontal } from "@phosphor-icons/react";

import Header from "@/components/Layout/Header";
import AnimationCard from "@/features/animations/components/AnimationCard";
import { Animation } from "@/features/animations/components/AnimationCarousel";

import { useFilterAnimations } from "../../hooks/useFilterAnimations";

import Filter from "./Filter";
import { AnimationListContainer, Tabs, Content } from "./style";
import Button from "@/components/Button";

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

  const TabItems = [
    {
      id: 1,
      title: "최신순",
      url: "/animations",
    },
    {
      id: 2,
      title: "리뷰순",
      url: "?sort=review",
    },
    {
      id: 3,
      title: "평점순",
      url: "?sort=rating",
    },
  ];

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
      <Tabs items={TabItems} defaultActiveId={1} />
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
