import { Star } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Slider from "react-slick";

import { useApi } from "@/hooks/useApi";
import { MainCarousel } from "@/libs/carousel";

import AnimeCarouselLoading from "../AnimeCarousel/AnimeCarouselLoading";

import { AnimeMainCarouselContainer, Image } from "./style";

export default function AnimeMainCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { animeApi } = useApi();
  const { data: animes, isLoading } = useQuery({
    queryKey: ["listOfRecentReviewed"],
    queryFn: () => animeApi.getListOfRecentReviewed(),
  });

  if (isLoading) return <AnimeCarouselLoading />;
  return (
    <>
      {animes && (
        <AnimeMainCarouselContainer image={animes[currentSlide].thumbnail}>
          <Slider
            {...MainCarousel}
            beforeChange={(_, newSlide) => setCurrentSlide(newSlide)}
          >
            {animes.map((anime, index) => (
              <>
                <section key={index}>
                  <Image src={anime.thumbnail} alt={anime.title} />
                  <div>
                    <h4>{anime.title}</h4>
                    <div>
                      <span>{anime.review}</span>
                      <div>
                        <Star weight="fill" />
                        <span>{anime.avgScore}</span>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            ))}
          </Slider>
        </AnimeMainCarouselContainer>
      )}
    </>
  );
}
