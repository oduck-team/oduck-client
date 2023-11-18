import { Star } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import { getListOfRecentReviewedResponse } from "../../api/AnimeApi";

import { Info, InfoContainer, Rating, Review, Slide } from "./SlideItem.style";

interface SlideItemProps {
  anime: getListOfRecentReviewedResponse;
}

export default function SlideItem({ anime }: SlideItemProps) {
  const navigate = useNavigate();
  return (
    <Slide
      image={anime.thumbnail}
      onClick={() => navigate(`/animes/${anime.id}`)}
    >
      <InfoContainer>
        <Info>
          <div>{anime.title}</div>
          <Review>
            <span>{anime.review}</span>
            <Rating>
              <Star weight="fill" />
              <span> {anime.avgScore}</span>
            </Rating>
          </Review>
        </Info>
      </InfoContainer>
    </Slide>
  );
}
