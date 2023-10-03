import { Star } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  HighlightItem,
  HighlightItemContainer,
  AnimationRankingContainer,
  Content,
  Rank,
  ItemSlider,
  SliderItem,
  SliderItemImage,
  SliderItemRating,
} from "./style";

// 임시 정의
export interface IRanking {
  id: string;
  title: string;
  image: string;
  genre: string;
  rank: number;
  rating: number;
}

interface AnimationRankingProps {
  title: string;
  contents: IRanking[];
}

export default function AnimationRanking({
  title,
  contents,
}: AnimationRankingProps) {
  const navgiate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [list, setList] = useState(
    contents.filter((_, i) => i !== currentIndex),
  );

  useEffect(() => {
    setList(contents.filter((_, i) => i !== currentIndex));
  }, [contents, currentIndex]);

  return (
    <AnimationRankingContainer>
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
              <Star weight="fill" />
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
    </AnimationRankingContainer>
  );
}
