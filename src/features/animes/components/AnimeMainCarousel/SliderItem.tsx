import { Star } from "@phosphor-icons/react";

import { getListOfRecentReviewedResponse } from "../../api/AnimeApi";

import { Image } from "./SliderItem.style";

interface SliderItemProps {
  anime: getListOfRecentReviewedResponse;
}

export default function SliderItem({ anime }: SliderItemProps) {
  return (
    <section>
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
  );
}
