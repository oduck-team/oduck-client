import { useQuery } from "@tanstack/react-query";
import { Fragment, useRef, useState } from "react";
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
  const mainCarouselRef = useRef<HTMLDivElement>(null);
  const [mainNav, setMainNav] = useState<Slider | undefined>();
  const [subNav, setSubNav] = useState<Slider | undefined>();
  const [dragging, setDragging] = useState(false);
  const { animeApi } = useApi();
  const { data: animes, isLoading } = useQuery({
    queryKey: ["top10List"],
    queryFn: () => animeApi.getTOP10List(),
  });

  const handleClick = (e: React.MouseEvent) => {
    const currentElement = mainCarouselRef.current?.querySelector(
      ".slick-current div[data-anime-id]",
    );

    if (dragging) {
      e.stopPropagation();
      return;
    }

    if (currentElement) {
      const el = currentElement as HTMLDivElement;
      navigate(`/animes/${el.dataset.animeId}`);
    }
  };

  return (
    <>
      {isLoading && <AnimeRankingLoading />}
      {animes && (
        <>
          <AnimeRankingContainer>
            <h1>{title}</h1>
            <div ref={mainCarouselRef}>
              <Slider
                {...SyncingMainCarousel}
                ref={(mainNav) => setMainNav(mainNav ?? undefined)}
                asNavFor={subNav}
                beforeChange={() => setDragging(true)}
                afterChange={() => setDragging(false)}
              >
                {animes.map((ani, i) => (
                  <>
                    <HighlightItemContainer key={ani.animeId}>
                      <HighlightItem
                        image={ani.thumbnail}
                        data-anime-id={ani.animeId}
                        onClick={(e: React.MouseEvent) => handleClick(e)}
                      >
                        <Rank size="lg">{i + 1}</Rank>
                        <h3>{ani.genres.join("/")}</h3>
                        <h2>{ani.title}</h2>
                      </HighlightItem>
                    </HighlightItemContainer>
                  </>
                ))}
              </Slider>
            </div>

            <div className="sub-carousel">
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
                {/* carousel 레이아웃 망가짐 방지: div 추가  */}
                <div />
              </Slider>
            </div>
          </AnimeRankingContainer>
        </>
      )}
    </>
  );
}
