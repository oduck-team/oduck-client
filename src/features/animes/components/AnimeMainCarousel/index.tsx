import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Slider from "react-slick";

import { useApi } from "@/hooks/useApi";
import { MainCarousel } from "@/libs/carousel";

import AnimeCarouselLoading from "../AnimeCarousel/AnimeCarouselLoading";

import SliderItem from "./SliderItem";
import { AnimeMainCarouselContainer } from "./style";

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
              <SliderItem key={index} anime={anime} />
            ))}
          </Slider>
        </AnimeMainCarouselContainer>
      )}
    </>
  );
}
