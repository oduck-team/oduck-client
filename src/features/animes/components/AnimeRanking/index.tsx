import { Star } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

import { useApi } from "@/hooks/useApi";
import { SyncingMainCarousel, SyncingSubCarousel } from "@/libs/carousel";

import AnimeRankingLoading from "./AnimeRankingLoading";
import {
  HighlightItem,
  HighlightItemContainer,
  AnimeRankingContainer,
  Rank,
  SliderItem,
  SliderItemImage,
  SliderItemRating,
} from "./style";

interface AnimeRankingProps {
  title: string;
}

export default function AnimeRanking({ title }: AnimeRankingProps) {
  const navigate = useNavigate();
  const [mainNav, setMainNav] = useState<Slider | undefined>();
  const [subNav, setSubNav] = useState<Slider | undefined>();
  const [dragging, setDragging] = useState(false);
  const { animeApi } = useApi();
  const { data: animes, isLoading } = useQuery({
    queryKey: ["top10List"],
    queryFn: () => animeApi.getTOP10List(),
  });
  const handleClick = (e: React.MouseEvent, animesId: number) => {
    if (dragging) {
      e.stopPropagation();
      return;
    }
    navigate(`/animes/${animesId}`);
  };

  return (
    <>
      {isLoading && <AnimeRankingLoading />}
      {animes && (
        <>
          <AnimeRankingContainer>
            <h1>{title}</h1>
            <Slider
              {...SyncingMainCarousel}
              ref={(mainNav) => setMainNav(mainNav ?? undefined)}
              asNavFor={subNav}
              beforeChange={() => setDragging(true)}
              afterChange={() => setDragging(false)}
            >
              {animes.map((ani, i) => (
                <div key={i}>
                  <HighlightItemContainer>
                    <HighlightItem
                      image={ani.thumbnail}
                      onClick={(e: React.MouseEvent) => handleClick(e, ani.id)}
                    >
                      <Rank size="lg">{ani.rank}</Rank>
                      <h3>{ani.genres.join("/")}</h3>
                      <h2>{ani.title}</h2>
                      <SliderItemRating>
                        <Star weight="fill" />
                        <span>{ani.avgScore}</span>
                      </SliderItemRating>
                    </HighlightItem>
                  </HighlightItemContainer>
                </div>
              ))}
            </Slider>

            <Slider
              {...SyncingSubCarousel}
              asNavFor={mainNav}
              ref={(subNav) => setSubNav(subNav ?? undefined)}
            >
              {animes.map((ani, i) => (
                <SliderItem key={i}>
                  <SliderItemImage image={ani.thumbnail}>
                    <Rank>{ani.rank}</Rank>
                  </SliderItemImage>
                  <div>{ani.title}</div>
                </SliderItem>
              ))}
            </Slider>
          </AnimeRankingContainer>
        </>
      )}
    </>
  );
}
