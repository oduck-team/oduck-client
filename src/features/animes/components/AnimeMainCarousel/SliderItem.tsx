import { getListOfRecentReviewedResponse } from "../../api/AnimeApi";

import {
  Image,
  InfoContainer,
  RatingContainer,
  Review,
  ReviewContainer,
  Score,
  SliderItemContainer,
  StarIcon,
  Title,
} from "./SliderItem.style";
interface SliderItemProps {
  anime: getListOfRecentReviewedResponse;
  onClick: (e: React.MouseEvent) => void;
}

export default function SliderItem({ anime, onClick }: SliderItemProps) {
  return (
    <SliderItemContainer onClick={onClick}>
      <Image src={anime.thumbnail} alt={anime.title} />
      <InfoContainer>
        <Title>{anime.title}</Title>
        <ReviewContainer>
          <Review>{anime.review}</Review>
          <RatingContainer>
            <StarIcon weight="fill" size={18} />
            <Score>{anime.avgScore}</Score>
          </RatingContainer>
        </ReviewContainer>
      </InfoContainer>
    </SliderItemContainer>
  );
}
