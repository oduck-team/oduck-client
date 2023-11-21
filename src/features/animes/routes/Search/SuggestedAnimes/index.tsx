import { useNavigate } from "react-router";

import AnimeCard, {
  AnimeCardProps,
} from "@/features/animes/components/AnimeCard";
import AnimeCardSkeleton from "@/features/animes/components/AnimeCardSkeleton";

import { SuggestedAnimesContainer } from "./style";

interface SuggestedAnimesProps {
  isLoading: boolean;
  animes: AnimeCardProps[];
}

/** 이런 애니는 어떠세요 */
export default function SuggestedAnimes({
  isLoading,
  animes,
}: SuggestedAnimesProps) {
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <>
        <h1>이런 애니는 어떠세요?</h1>
        <SuggestedAnimesContainer>
          <AnimeCardSkeleton />
          <AnimeCardSkeleton />
          <AnimeCardSkeleton />
          <AnimeCardSkeleton />
        </SuggestedAnimesContainer>
      </>
    );
  }

  return (
    <>
      <h1>이런 애니는 어떠세요?</h1>
      <SuggestedAnimesContainer>
        {animes.map((anime) => (
          <li key={anime.id}>
            <AnimeCard
              id={anime.id}
              thumbnail={anime.thumbnail}
              title={anime.title}
              starScoreAvg={anime.starScoreAvg}
              onClick={() => navigate(`/animes/${anime.id}`)}
            />
          </li>
        ))}
      </SuggestedAnimesContainer>
    </>
  );
}
