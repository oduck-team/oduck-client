import { SlidersHorizontal } from "@phosphor-icons/react";

import Button from "@/components/Button";
import Header from "@/components/Layout/Header";
import { TabItem } from "@/components/Tabs";
import AnimeCard from "@/features/animes/components/AnimeCard";

import { getAnimeMock } from "../../api/mock";
import useFilterAnimes from "../../hooks/useFilterAnimes";

import Filter from "./Filter";
import { AnimeListContainer, Tabs, Content } from "./style";

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

export default function AnimeList() {
  const {
    bottomSheetVisible,
    bottomSheetOpen,
    bottomSheetClose,
    filterOptions,
    filtered,
    handleOptionClick,
    resetFilter,
    handleOkClick,
  } = useFilterAnimes();

  return (
    <AnimeListContainer>
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
        <AnimeCard size="lg" anime={getAnimeMock()} />
        <AnimeCard size="lg" anime={getAnimeMock()} />
        <AnimeCard size="lg" anime={getAnimeMock()} />
        <AnimeCard size="lg" anime={getAnimeMock()} />
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
    </AnimeListContainer>
  );
}
