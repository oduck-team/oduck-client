import styled from "@emotion/styled";
import { Cancel, Filter, NavArrowLeft } from "iconoir-react";
import { useState } from "react";

import BottomSheet from "@/components/BottomSheet";
import Button from "@/components/Button";
import Chip from "@/components/Chip";
import Tabs from "@/components/Tabs";
import AnimationCard from "@/features/animations/components/AnimationCard";
import { Animation } from "@/features/animations/components/AnimationCarousel";

export default function AnimationList() {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const [filtered, setFiltered] = useState<string[]>([]);

  const items = [
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

  const genres = [
    "판타지",
    "로맨스",
    "액션",
    "가족",
    "이세계",
    "개그",
    "학원",
    "감동",
    "범죄",
    "SF",
    "드라마",
  ];

  const seasons = [
    "2023년 1분기",
    "2023년 2분기",
    "2023년 3분기",
    "2023년 4분기",
    "2022년",
    "2021년",
    "2020년",
    "2019년",
    "2018년",
    "2017년",
    "2010년대",
    "2000년대",
    "2000년대 이전",
  ];

  const broadcastTypes = ["TVA", "OVA", "극장판"];

  const statuses = ["방영중", "완결"];

  const episodeNumber = [
    "12화 이하",
    "24화 이하",
    "48화 이하",
    "100화 이하",
    "100화 이상",
  ];

  const handlerOptionClick = (item: string) => {
    if (filtered.includes(item))
      setFiltered([...filtered].filter((a) => a !== item));
    else setFiltered([...filtered, item]);
  };

  const resetFilter = () => {
    setFiltered([]);
  };

  const handlerOkClick = () => {
    // TODO 필터링된 애니 요청
    // BottomSheet 닫기
  };

  return (
    <Container>
      <HeaderContainer>
        <Header>
          <NavArrowLeft />
          애니
          <Filter onClick={() => setBottomSheetVisible(true)} />
        </Header>
        <Tabs items={items} defaultActiveId={1} />
      </HeaderContainer>
      <Content>
        <AnimationCard size="lg" ani={CardAni} />
        <AnimationCard size="lg" ani={CardAni2} />
        <AnimationCard size="lg" ani={CardAni} />
        <AnimationCard size="lg" ani={CardAni2} />
      </Content>
      <BottomSheet
        isVisible={bottomSheetVisible}
        onClose={() => setBottomSheetVisible(false)}
      >
        <BottomSheet.Content>
          {filtered.length > 0 && (
            <ChipsContiner style={{ marginBottom: "24px" }}>
              <h3 style={{ marginTop: "0" }}>선택된 필터</h3>
              <Chips>
                {filtered.map((item, i) => (
                  <Chip
                    key={i}
                    active={filtered.includes(item)}
                    variant="filter"
                    onClick={() => handlerOptionClick(item)}
                    icon={<Cancel />}
                  >
                    {item}
                  </Chip>
                ))}
              </Chips>
            </ChipsContiner>
          )}
          <ChipsContiner>
            <h3 style={{ marginTop: "0" }}>장르</h3>
            <Chips>
              {genres.map((genre, i) => (
                <Chip
                  key={i}
                  active={filtered.includes(genre)}
                  variant="filter"
                  onClick={() => handlerOptionClick(genre)}
                >
                  {genre}
                </Chip>
              ))}
            </Chips>
          </ChipsContiner>
          <ChipsContiner>
            <h3>출시년도</h3>
            <Chips>
              {seasons.map((season, i) => (
                <Chip
                  key={i}
                  active={filtered.includes(season)}
                  variant="filter"
                  onClick={() => handlerOptionClick(season)}
                >
                  {season}
                </Chip>
              ))}
            </Chips>
          </ChipsContiner>
          <ChipsContiner>
            <h3>방영타입</h3>
            <Chips>
              {broadcastTypes.map((type, i) => (
                <Chip
                  key={i}
                  active={filtered.includes(type)}
                  variant="filter"
                  onClick={() => handlerOptionClick(type)}
                >
                  {type}
                </Chip>
              ))}
            </Chips>
          </ChipsContiner>
          <ChipsContiner>
            <h3>방영</h3>
            <Chips>
              {statuses.map((status, i) => (
                <Chip
                  key={i}
                  active={filtered.includes(status)}
                  variant="filter"
                  onClick={() => handlerOptionClick(status)}
                >
                  {status}
                </Chip>
              ))}
            </Chips>
          </ChipsContiner>
          <ChipsContiner>
            <h3>화수</h3>
            <Chips>
              {episodeNumber.map((num, i) => (
                <Chip
                  key={i}
                  active={filtered.includes(num)}
                  variant="filter"
                  onClick={() => handlerOptionClick(num)}
                >
                  {num}
                </Chip>
              ))}
            </Chips>
          </ChipsContiner>
        </BottomSheet.Content>
        <BottomSheet.Footer>
          <ResetButton
            variant="text"
            size="sm"
            name="초기화"
            onClick={resetFilter}
            color="neutral"
          >
            필터 초기화
          </ResetButton>
          <OkButton name="적용 완료" size="lg" onClick={handlerOkClick}>
            적용 완료
          </OkButton>
        </BottomSheet.Footer>
      </BottomSheet>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 66px;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  position: fixed;
  top: 0;
`;

const Header = styled.div`
  background-color: white;
  width: 100%;
  height: 90px;
  padding: 40px 16px 0;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.typo["title-3-b"]};

  & > svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 166px 16px 92px;
`;

const ChipsContiner = styled.div`
  position: relative;
  padding: 0 24px;
  h3 {
    ${({ theme }) => theme.typo["body-1-m"]};
    margin: 24px 0 8px;
    display: flex;
    align-items: center;
  }
`;

const Chips = styled.div`
  display: flex;
  gap: 8px 4px;
  flex-wrap: wrap;
`;

const OkButton = styled(Button)`
  width: 208px;
  span {
    ${({ theme }) => theme.typo["title-3-m"]};
  }
`;

const ResetButton = styled(Button)`
  padding: 0;
  color: ${({ theme }) => theme.colors["neutral"]["50"]};
  ${({ theme }) => theme.typo["body-3-r"]};
  letter-spacing: normal;
`;
