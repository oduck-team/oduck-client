import { Star } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useApi } from "@/hooks/useApi";

import AnimeRankingLoading from "./AnimeRankingLoading";
import {
  HighlightItem,
  HighlightItemContainer,
  AnimeRankingContainer,
  Content,
  Rank,
  ItemSlider,
  SliderItem,
  SliderItemImage,
  SliderItemRating,
} from "./style";

interface AnimeRankingProps {
  title: string;
}

export default function AnimeRanking({ title }: AnimeRankingProps) {
  const navgiate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { animeApi } = useApi();
  const { data: animes, isLoading } = useQuery({
    queryKey: ["top10List"],
    queryFn: () => animeApi.getTOP10List(),
  });

  return (
    <>
      {animes && (
        <AnimeRankingContainer>
          <h1>{title}</h1>
          <Content>
            {isLoading && <AnimeRankingLoading />}
            {!isLoading && (
              <>
                <HighlightItemContainer>
                  <HighlightItem
                    image={animes[currentIndex].thumbnail}
                    onClick={() => navgiate(`/animes/${currentIndex}`)}
                  >
                    <Rank size="lg">{animes[currentIndex].rank}</Rank>
                    <h3>{animes[currentIndex].genres.join("/")}</h3>
                    <h2>{animes[currentIndex].title}</h2>
                    <SliderItemRating>
                      <Star weight="fill" />
                      <span>{animes[currentIndex].avgScore}</span>
                    </SliderItemRating>
                  </HighlightItem>
                </HighlightItemContainer>
                <ItemSlider>
                  {animes.map((ani, i) => (
                    <SliderItem
                      key={i}
                      onClick={() => setCurrentIndex(ani.rank - 1)}
                    >
                      <SliderItemImage image={ani.thumbnail}>
                        <Rank>{ani.rank}</Rank>
                      </SliderItemImage>
                      <div>{ani.title}</div>
                    </SliderItem>
                  ))}
                </ItemSlider>
              </>
            )}
          </Content>
        </AnimeRankingContainer>
      )}
    </>
  );
}
