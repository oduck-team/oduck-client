import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

import { useApi } from "@/hooks/useApi";
import { SyncingMainCarousel, SyncingSubCarousel } from "@/libs/carousel";

import AnimeRankingLoading from "./AnimeRankingLoading";
import NotExistAnime from "./NotExistAnime";
import {
  HighlightItem,
  HighlightItemContainer,
  AnimeRankingContainer,
  Rank,
  SliderItem,
  SliderItemImage,
  MainCarouselContainer,
} from "./style";

interface AnimeRankingProps {
  title: string;
}

export default function AnimeRanking({ title }: AnimeRankingProps) {
  const navigate = useNavigate();
  const mainCarouselRef = useRef<HTMLDivElement>(null);
  const [mainNav, setMainNav] = useState<Slider | undefined>();
  const [subNav, setSubNav] = useState<Slider | undefined>();
  const [dragging, setDragging] = useState(false); // main carousel 드래그 상태
  const { animeApi } = useApi();
  const { data: animes, isLoading } = useQuery({
    queryKey: ["top10List"],
    queryFn: () => animeApi.getTOP10List(),
  });

  const handleClick = (e: React.MouseEvent) => {
    const currentElement = mainCarouselRef.current?.querySelector(
      ".slick-current div[data-anime-id]",
    );

    /** descktop에서 main carousel 드래그 중일때는 페이지 이동 발생하지 않도록 설정*/
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
            <MainCarouselContainer ref={mainCarouselRef}>
              <Slider
                {...SyncingMainCarousel}
                ref={(mainNav) => setMainNav(mainNav ?? undefined)}
                asNavFor={subNav}
                beforeChange={() => setDragging(true)}
                afterChange={() => setDragging(false)}
              >
                {animes.map((ani, i) => (
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
                ))}

                {Array.from({ length: 10 - animes.length }, (_, i) => (
                  <NotExistAnime
                    key={i + animes.length + 1}
                    message="애니 리뷰를 부탁해요."
                  />
                ))}
              </Slider>
            </MainCarouselContainer>

            <div className="sub-carousel">
              <Slider
                {...SyncingSubCarousel}
                asNavFor={mainNav}
                ref={(subNav) => setSubNav(subNav ?? undefined)}
              >
                {animes.map((ani, i) => (
                  <SliderItem key={ani.animeId}>
                    <SliderItemImage image={ani.thumbnail}>
                      <Rank className="sub-carousel">{i + 1}</Rank>
                    </SliderItemImage>
                    <div>{ani.title}</div>
                  </SliderItem>
                ))}

                {Array.from({ length: 10 - animes.length }, (_, i) => (
                  <NotExistAnime key={i + animes.length + 1} />
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
