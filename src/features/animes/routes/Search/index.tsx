import { useState } from "react";

import Head from "@/components/Head";
import Header from "@/components/Layout/Header";

import useAnimes from "../../hooks/useAnimes";

import Searchbar from "./Searchbar";
import SearchedAnimes from "./SearchedAnimes";
import { SearchContainer, Section } from "./style";
import SuggestedAnimes from "./SuggestedAnimes";

const SEARCH_RESULT_SIZE = 10;

export default function Search() {
  const [searchCancelVisible, setSearchCancelVisible] = useState(false); // 검색 취소 렌더링 여부
  const [searchQuery, setSearchQuery] = useState(""); // 검색어
  const [searchErrorMessage, setSearchErrorMessage] = useState(""); // 검색 에러 메세지
  const [isSearching, setIsSearching] = useState(false); // authFetch 상태 관리

  // 추천애니
  const { data: suggestedAnimes, isLoading: isSuggestedAnimesLoading } =
    useAnimes({
      autoFetch: true,
      queryParams: { size: 4, sort: "REVIEW_COUNT" },
    });

  // 검색 애니
  const {
    data: searchedAnimes,
    isLoading: isSearchedAnimesLoading,
    hasNextPage,
    fetchNextPage: fetchNextSearchPage,
  } = useAnimes({
    autoFetch: isSearching,
    queryParams: {
      query: searchQuery,
      size: SEARCH_RESULT_SIZE,
      sort: "LATEST",
    },
  });

  const handleSearch = (value: string) => {
    setSearchCancelVisible(true);

    if (!isValid(value)) {
      return;
    }

    setSearchQuery(value);
    setIsSearching(true); // 검색 시작
  };

  const isValid = (value: string) => {
    if (value.length > 50) {
      setSearchErrorMessage("50자 이내로 입력해주세요");
      return false;
    }

    return true;
  };

  const handleSearchCancel = () => {
    setIsSearching(false); // 검색 취소
    setSearchQuery("");
    setSearchCancelVisible(false);
  };

  return (
    <>
      <Head title="오덕 | 검색하기" />

      <SearchContainer>
        <Header>
          <Header.Center style={{ width: "100%" }}>
            <Searchbar
              isCancelButtonVisible={searchCancelVisible}
              errorMessage={searchErrorMessage}
              onSearch={handleSearch}
              onCancel={handleSearchCancel}
            />
          </Header.Center>
        </Header>
        <h1>검색하기</h1>
        {/* TODO: API */}
        {/* <Section style={{ marginTop: "32px" }}>
          <h1>최근 많이 검색된</h1>
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {최근_많이_검색된.map((item) => (
              <li key={item}>
                <Chip onClick={() => handleClickPopularKeyowrd(item)}>
                  {item}
                </Chip>
              </li>
            ))}
          </ul>
        </Section> */}

        <Section style={{ marginTop: "32px" }}>
          {isSearching && (
            <SearchedAnimes
              isLoading={isSearchedAnimesLoading}
              animes={searchedAnimes?.pages ?? []}
              hasNext={hasNextPage ?? false}
              onLoadNext={fetchNextSearchPage}
            />
          )}

          {/* 추천 애니메이션 */}
          {!isSearching && (
            <SuggestedAnimes
              isLoading={isSuggestedAnimesLoading}
              animes={suggestedAnimes?.pages ?? []}
            />
          )}
        </Section>
      </SearchContainer>
    </>
  );
}
