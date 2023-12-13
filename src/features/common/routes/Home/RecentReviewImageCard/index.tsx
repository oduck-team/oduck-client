import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { useApi } from "@/hooks/useApi";

import {
  AnimeConatiner,
  AnimeInfo,
  AnimeTitle,
  Content,
  EvaluationContainer,
  GenreItem,
  GenreList,
  Image,
  RatingContainer,
  RecentReviewImageCardContainer,
  StrarIcon,
} from "./style";

export default function RecentReviewImageCard() {
  const { reviewApi } = useApi();
  const { data } = useQuery({
    queryFn: () => reviewApi.getRecentReviewCard(),
    queryKey: ["MostRecentReviewList", "card"],
  });

  return (
    <>
      {data && (
        <RecentReviewImageCardContainer>
          <Link to={`/animes/${data.animeId}`}>
            <AnimeConatiner>
              <Image src={data.thumbnail} alt={data.title} />
              <AnimeInfo>
                <GenreList>
                  {data.genres.map((genre) => (
                    <GenreItem key={genre}>{genre}</GenreItem>
                  ))}
                </GenreList>
                <AnimeTitle>{data.title}</AnimeTitle>
              </AnimeInfo>
            </AnimeConatiner>
            <EvaluationContainer>
              <Content>{data.content}</Content>
              <RatingContainer>
                <StrarIcon weight="fill" size={14} />
                <span>{data.score}</span>
              </RatingContainer>
            </EvaluationContainer>
          </Link>
        </RecentReviewImageCardContainer>
      )}
    </>
  );
}
