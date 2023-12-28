import { SlidersHorizontal } from "@phosphor-icons/react";
import { useRef } from "react";
import { useNavigate } from "react-router";

import Button from "@/components/Button";
import Empty from "@/components/Error/Empty";
import Head from "@/components/Head";
import Header from "@/components/Layout/Header";
import Loader from "@/components/Loader";
import { TabItem } from "@/components/Tabs";
import AnimeCard from "@/features/animes/components/AnimeCard";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import { AnimeSort } from "../../api/AnimeApi";
import GridAnimeCardSkeleton from "../../components/AnimeCardSkeleton/GridAnimeCardSkeleton";
import useFilterAnimes from "../../hooks/useFilterAnimes";

import Filter from "./Filter";
import { AnimeListContainer, Tabs, Content } from "./style";

const TabItems: TabItem[] = [
  {
    id: "LATEST",
    title: "최신순",
  },
  {
    id: "REVIEW_COUNT",
    title: "리뷰순",
  },
  {
    id: "SCORE",
    title: "별점순",
  },
];

const DEFAULT_TAB_ID = "LATEST";

export default function AnimeList() {
  const {
    animesQuery,
    bottomSheetVisible,
    bottomSheetOpen,
    bottomSheetClose,
    filterOptions,
    selectedFilters,
    changeSort,
    addFilter,
    removeFilter,
    resetFilter,
    applyFilters,
  } = useFilterAnimes();

  const observeRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useIntersectionObserver({
    target: observeRef,
    onIntersect: () => animesQuery.fetchNextPage(),
    enabled: animesQuery.hasNextPage,
  });

  return (
    <>
      <Head
        title="리뷰를 남기고 싶은 애니 찾기 | 오덕"
        description="다양한 애니메이션을 태그와 최신순, 이름순, 리뷰순으로 만나보세요!"
      />
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
        <Tabs
          items={TabItems}
          defaultActiveId={DEFAULT_TAB_ID}
          onChange={(value) => changeSort(value as AnimeSort)}
        />
        <Content>
          {animesQuery.isLoading &&
            Array.from({ length: 7 }, (_, i) => (
              <GridAnimeCardSkeleton key={i} />
            ))}

          {animesQuery.data?.pages.length === 0 && (
            <Empty message="애니가 없어요" />
          )}

          {animesQuery.data && (
            <>
              {animesQuery.data?.pages.map((item) => (
                <AnimeCard
                  {...item}
                  key={item.id}
                  onClick={() => navigate(`/animes/${item.id}`)}
                />
              ))}
            </>
          )}

          <div ref={observeRef} />

          {animesQuery.isFetchingNextPage && <Loader display="oduck" />}
        </Content>
        <Filter
          isVisible={bottomSheetVisible}
          filterOptions={filterOptions}
          selectedFilters={selectedFilters}
          onClose={bottomSheetClose}
          resetFilter={resetFilter}
          handleFilterAdd={addFilter}
          handleFilterRemove={removeFilter}
          handleOkClick={applyFilters}
        />
      </AnimeListContainer>
    </>
  );
}
