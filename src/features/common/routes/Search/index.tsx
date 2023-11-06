import { useState } from "react";

import Chip from "@/components/Chip";
import Head from "@/components/Head";
import Header from "@/components/Layout/Header";
import AnimeCard from "@/features/animes/components/AnimeCard";

import Searchbar from "./Searchbar";
import { SearchContainer, Section } from "./style";

const 최근_많이_검색된 = [
  "판타지",
  "일상",
  "주술회전",
  "원피스",
  "발키리",
  "너의이름은",
  "이세계",
  "무직전생",
];

const 이런_애니_어떠세요 = [
  {
    id: 1,
    title: "주술회전",
    thumbnail: "https://url.kr/lo4miy",
  },
  {
    id: 3,
    title: "주술회전",
    thumbnail: "https://url.kr/lo4miy",
  },
  {
    id: 4,
    title: "주술회전",
    thumbnail: "https://url.kr/lo4miy",
  },
  {
    id: 3,
    title: "주술회전",
    thumbnail: "https://url.kr/lo4miy",
  },
] as Anime[];

export default function Search() {
  const [searchInputValue, setSearchInputValue] = useState(""); // 사용자가 입력하는 검색어

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO 검색
  };

  const handleSearchCancel = () => {
    setSearchInputValue("");
  };

  const handleClickPopularKeyowrd = (value: string) => {
    setSearchInputValue(value);
  };

  return (
    <>
      <Head title="오덕 | 검색하기" />

      <SearchContainer>
        <Header>
          <Header.Center style={{ width: "100%" }}>
            <Searchbar
              value={searchInputValue}
              onChange={handleSearchChange}
              onSearch={handleSearch}
              onCancel={handleSearchCancel}
            />
          </Header.Center>
        </Header>
        <h1>검색하기</h1>
        <Section style={{ marginTop: "32px" }}>
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
        </Section>
        <Section style={{ marginTop: "32px" }}>
          <h1>이런 애니는 어떠세요?</h1>
          <ul style={{ display: "flex", gap: "32px 8px", flexWrap: "wrap" }}>
            {이런_애니_어떠세요.map((anime) => (
              <li key={anime.id}>
                <AnimeCard
                  id={anime.id}
                  thumbnail={anime.thumbnail}
                  title={anime.title}
                  starScoreAvg={10}
                />
              </li>
            ))}
          </ul>
        </Section>
      </SearchContainer>
    </>
  );
}
