import { useQuery } from "@tanstack/react-query";
import { Fragment, useState } from "react";
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
  const handleClick = (e: React.MouseEvent, animeId: number) => {
    console.log(animeId);
    if (dragging) {
      e.stopPropagation();
      return;
    }

    navigate(`/animes/${animeId}`);
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
                <Fragment key={ani.animeId}>
                  <HighlightItemContainer>
                    <HighlightItem
                      image={ani.thumbnail}
                      onClick={(e: React.MouseEvent) =>
                        handleClick(e, ani.animeId)
                      }
                    >
                      <Rank size="lg">{i + 1}</Rank>
                      {ani.animeId}
                      <h3>{ani.genres.join("/")}</h3>
                      <h2>{ani.title}</h2>
                    </HighlightItem>
                  </HighlightItemContainer>
                </Fragment>
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
                    <Rank>{i + 1}</Rank>
                  </SliderItemImage>
                  <div>{ani.title}</div>
                </SliderItem>
              ))}
              {/* 마지막 슬라이드 아이템이 조금 짤려서 빈 div 추가  */}
              <div />
            </Slider>
          </AnimeRankingContainer>
        </>
      )}
    </>
  );
}
