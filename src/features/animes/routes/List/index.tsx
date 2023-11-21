import { SlidersHorizontal } from "@phosphor-icons/react";
import { useRef } from "react";
import { useNavigate } from "react-router";
import { v4 as uuid } from "uuid";

import Button from "@/components/Button";
import Empty from "@/components/Error/Empty";
import Head from "@/components/Head";
import Header from "@/components/Layout/Header";
import Skeleton from "@/components/Skeleton";
import { TabItem } from "@/components/Tabs";
import AnimeCard from "@/features/animes/components/AnimeCard";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import { AnimeSort } from "../../api/AnimeApi";
import useFilterAnimes from "../../hooks/useFilterAnimes";

import Filter from "./Filter";
import {
  AnimeListContainer,
  Tabs,
  Content,
  AnimeSkeletonContainer,
} from "./style";

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
    title: "평점순",
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
      <Head title="오덕 | 애니" description="다양한 애니메이션을 만나보세요!" />
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
          {(animesQuery.isLoading || animesQuery.isFetching) &&
            Array.from({ length: 7 }, () => (
              <AnimeSkeletonContainer aria-busy="true" key={uuid()}>
                <Skeleton w="full" h={152} />
                <Skeleton w={120} h={24} />
                <Skeleton w={30} h={24} />
              </AnimeSkeletonContainer>
            ))}

          {!animesQuery.isLoading &&
            !animesQuery.isFetching &&
            animesQuery.data?.pages.length === 0 && (
              <Empty message="애니가 없어요" />
            )}

          {!animesQuery.isLoading && !animesQuery.isFetching && (
            <>
              {animesQuery.data?.pages.map((item) => (
                <>
                  <AnimeCard
                    {...item}
                    key={item.id}
                    onClick={() => navigate(`/animes/${item.id}`)}
                  />
                  <span>{item.id}</span>
                </>
              ))}
              <div ref={observeRef}></div>
            </>
          )}
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
