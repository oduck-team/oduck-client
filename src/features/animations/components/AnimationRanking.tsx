import { Star } from "iconoir-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  HighlightItem,
  HighlightItemContainer,
  Container,
  Content,
  Rank,
  ItemSlider,
  SliderItem,
  SliderItemImage,
  SliderItemRating,
} from "./AnimationRanking.style";

// 임시 정의
export interface IRanking {
  readonly id: string;
  readonly title: string;
  readonly image: string;
  readonly genre: string;
  readonly rank: number;
  readonly rating: number;
}

interface AnimationRankingProps {
  readonly title: string;
  readonly contents: IRanking[];
}

export default function AnimationRanking({
  title,
  contents,
}: AnimationRankingProps) {
  const navgiate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [list, setList] = useState(
    contents.filter((a, i) => i !== currentIndex),
  );

  useEffect(() => {
    setList(contents.filter((_, i) => i !== currentIndex));
  }, [contents, currentIndex]);

  return (
    <Container>
      <h1>{title}</h1>
      <Content>
        <HighlightItemContainer>
          <HighlightItem
            image={contents[currentIndex].image}
            onClick={() => navgiate(`/animations/${currentIndex}`)}
          >
            <Rank size="lg">{contents[currentIndex].rank}</Rank>
            <h3>{contents[currentIndex].genre}</h3>
            <h2>{contents[currentIndex].title}</h2>
            <SliderItemRating>
              <Star />
              <span>{contents[currentIndex].rating}</span>
            </SliderItemRating>
          </HighlightItem>
        </HighlightItemContainer>
        <ItemSlider>
          {list.map((ani, i) => (
            <SliderItem key={i} onClick={() => setCurrentIndex(ani.rank - 1)}>
              <SliderItemImage image={ani.image}>
                <Rank>{ani.rank}</Rank>
              </SliderItemImage>
              <div>{ani.title}</div>
            </SliderItem>
          ))}
        </ItemSlider>
      </Content>
    </Container>
  );
}
