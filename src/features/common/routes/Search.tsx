import styled from "@emotion/styled";
import { Search as SearchIcon } from "iconoir-react";

import Chip from "@/components/Chip";
import Head from "@/components/Head";

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

export default function Search() {
  return (
    <>
      <Head title="오덕 | 검색하기" />
      <Container>
        <h1>검색하기</h1>
        <Searchbar style={{ marginTop: "50px" }} />
        <Section style={{ marginTop: "32px" }}>
          <h1>최근 많이 검색된</h1>
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginTop: "8px",
            }}
          >
            {최근_많이_검색된.map((item) => (
              <li key={item}>
                <Chip>{item}</Chip>
              </li>
            ))}
          </ul>
        </Section>
        <Section style={{ marginTop: "32px" }}>
          <h1>이런 애니는 어떠세요?</h1>
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

function Searchbar({ ...props }) {
  return (
    <SearchbarContainer {...props}>
      <SearchIcon height={20} width={20} />
      <form action="/search">
        <label htmlFor="search">검색</label>
        <input id="search" type="text" placeholder="검색어를 입력해주세요" />
      </form>
    </SearchbarContainer>
  );
}

const SearchbarContainer = styled.div`
  position: relative;

  & > svg {
    position: absolute;
    top: 10px;
    left: 8px;
    color: ${({ theme }) => theme.colors.neutral["60"]};
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
    color: ${({ theme }) => theme.colors.neutral["80"]}
  }
`;
