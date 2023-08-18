import { Star } from "iconoir-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  BigItem,
  BigItemContainer,
  Container,
  Content,
  Rank,
  SlideContainer,
  SmallItem,
  SmallItemImage,
  SmallItemRating,
} from "./Ranking.style";

// 임시 정의
export interface IRanking {
  readonly id: string;
  readonly title: string;
  readonly image: string;
  readonly genre: string;
  readonly rank: number;
  readonly rating: number;
}

interface Props {
  readonly title: string;
  readonly contents: IRanking[];
}

export default function Ranking({ title, contents }: Props) {
  const navgiate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [list, setList] = useState(
    contents.filter((a, i) => i !== currentIndex),
  );

  useEffect(() => {
    setList(contents.filter((a, i) => i !== currentIndex));
  }, [contents, currentIndex]);

  return (
    <Container>
      <h1>{title}</h1>
      <Content>
        <BigItemContainer>
          <BigItem
            image={contents[currentIndex].image}
            onClick={() => navgiate(`/animations/${currentIndex}`)}
          >
            <Rank size="lg">{contents[currentIndex].rank}</Rank>
            <h3>{contents[currentIndex].genre}</h3>
            <h2>{contents[currentIndex].title}</h2>
            <SmallItemRating>
              <Star />
              <span>{contents[currentIndex].rating}</span>
            </SmallItemRating>
          </BigItem>
        </BigItemContainer>
        <SlideContainer>
          {list.map((ani, i) => (
            <SmallItem key={i} onClick={() => setCurrentIndex(ani.rank - 1)}>
              <SmallItemImage image={ani.image}>
                <Rank>{ani.rank}</Rank>
              </SmallItemImage>
              <div>{ani.title}</div>
            </SmallItem>
          ))}
        </SlideContainer>
      </Content>
    </Container>
  );
}
