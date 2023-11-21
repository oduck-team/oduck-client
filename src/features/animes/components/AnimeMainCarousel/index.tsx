import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

import { useApi } from "@/hooks/useApi";
import { MainCarousel } from "@/libs/carousel";

import AnimeCarouselLoading from "../AnimeCarousel/AnimeCarouselLoading";

import SliderItem from "./SliderItem";
import { AnimeMainCarouselContainer } from "./style";

export default function AnimeMainCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragging, setDragging] = useState(false);
  const { animeApi } = useApi();
  const navigate = useNavigate();
  const { data: animes, isLoading } = useQuery({
    queryKey: ["listOfRecentReviewed"],
    queryFn: () => animeApi.getListOfRecentReviewed(),
  });

  const handleBeforeChange = (newSlide: number) => {
    setDragging(true);
    setCurrentSlide(newSlide);
  };
  const handleAfterChange = () => setDragging(false);
  const handleSliderItemClick = (e: React.MouseEvent, animesId: number) => {
    if (dragging) {
      e.stopPropagation();
      return;
    }
    navigate(`animes/${animesId}`);
  };

  if (isLoading) return <AnimeCarouselLoading />;
  return (
    <>
      {animes && (
        <AnimeMainCarouselContainer image={animes[currentSlide].thumbnail}>
          <Slider
            {...MainCarousel}
            beforeChange={(_, newSlide) => handleBeforeChange(newSlide)}
            afterChange={handleAfterChange}
          >
            {animes.map((anime, index) => (
              <SliderItem
                key={index}
                anime={anime}
                onClick={(e: React.MouseEvent) =>
                  handleSliderItemClick(e, anime.id)
                }
              />
            ))}
          </Slider>
        </AnimeMainCarouselContainer>
      )}
    </>
  );
}
