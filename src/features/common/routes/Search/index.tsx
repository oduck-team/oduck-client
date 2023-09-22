import styled from "@emotion/styled";
import { Search as SearchIcon } from "iconoir-react";
import { ComponentProps, useState } from "react";

import Button from "@/components/Button";
import Chip from "@/components/Chip";
import Head from "@/components/Head";
import AnimationCard from "@/features/animations/components/AnimationCard";

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
    id: "123456",
    title: "주술회전",
    image: "https://url.kr/lo4miy",
    rating: 4.8,
  },
  {
    id: "12345",
    title: "주술회전",
    image: "https://url.kr/lo4miy",
    rating: 4.8,
  },
  {
    id: "1234",
    title: "주술회전",
    image: "https://url.kr/lo4miy",
    rating: 4.8,
  },
  {
    id: "1234",
    title: "주술회전",
    image: "https://url.kr/lo4miy",
    rating: 4.8,
  },
];

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
      <Container>
        <h1>검색하기</h1>
        <Searchbar
          value={searchInputValue}
          style={{ marginTop: "50px" }}
          onChange={handleSearchChange}
          onSearch={handleSearch}
          onCancel={handleSearchCancel}
        />
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
            {이런_애니_어떠세요.map((ani) => (
              <li key={ani.id}>
                <AnimationCard ani={ani} />
              </li>
            ))}
          </ul>
        </Section>
      </Container>
    </>
  );
}

const Container = styled.main`
  ${({ theme }) => theme.container}
  margin: 0 auto;
  padding: 0 16px;

  & > h1 {
    display: none;
  }
`;

interface SearchbarProps extends ComponentProps<"div"> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
}

function Searchbar({
  value,
  onChange,
  onSearch,
  onCancel,
  ...props
}: SearchbarProps) {
  const isButtonVisible = value.length > 0;
  return (
    <SearchbarContainer isButtonVisible={isButtonVisible} {...props}>
      <SearchIcon height={20} width={20} />
      <form action="/search" onSubmit={onSearch}>
        <label htmlFor="search">검색</label>
        <input
          id="search"
          type="text"
          placeholder="검색어를 입력해주세요"
          value={value}
          onChange={onChange}
        />
        {isButtonVisible && (
          <Button
            name="검색취소"
            styleType="text"
            size="sm"
            style={{
              minWidth: "fit-content",
              marginLeft: "8px",
              paddingLeft: "0",
              paddingRight: 0,
            }}
            onClick={onCancel}
          >
            취소
          </Button>
        )}
      </form>
    </SearchbarContainer>
  );
}

const SearchbarContainer = styled.div<{ isButtonVisible: boolean }>`
  position: relative;

  & > svg {
    position: absolute;
    top: 10px;
    left: 8px;
    color: ${({ theme }) => theme.colors.neutral["60"]};
  }

  & form {
    display: flex;
    align-items: center;
  }

  & label {
    display: none;
  }

  & input[type="text"] {
    display: inline-flex;
    align-items: center;
    height: 40px;
    width: 100%;
    padding-left: 36px;
    padding-right: 16px;
    background-color: ${({ theme }) => theme.colors.neutral["10"]};
    border: none;
    border-radius: 5px;

    /* Chrome, Firefox, Opera, Safari 10.1+ */
    ::placeholder {
      color: ${({ theme }) => theme.colors.neutral["50"]};
    }

    /* Internet Explorer 10-11 */
    :-ms-input-placeholder {
      color: ${({ theme }) => theme.colors.neutral["50"]};
    }

    /* Microsoft Edge */
    ::-ms-input-placeholder {
      color: ${({ theme }) => theme.colors.neutral["50"]};
    }

    &:focus {
      outline: none;
    }
  }
`;

const Section = styled.section`
  & > h1 {
    ${({ theme }) => theme.typo["title-3-m"]}
    color: ${({ theme }) => theme.colors.neutral["80"]};
    margin-bottom: 8px;
  }
`;
