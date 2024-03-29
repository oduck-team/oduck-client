import { useNavigate } from "react-router";

import AnimeCard, {
  AnimeCardProps,
} from "@/features/animes/components/AnimeCard";
import GridAnimeCardSkeleton from "@/features/animes/components/AnimeCardSkeleton/GridAnimeCardSkeleton";

import { SuggestedAnimesContainer } from "./style";

interface SuggestedAnimesProps {
  isLoading: boolean;
  animes: Omit<AnimeCardProps, "onClick">[];
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
          {Array.from({ length: 4 }, (_, i) => (
            <GridAnimeCardSkeleton key={i} />
          ))}
        </SuggestedAnimesContainer>
      </>
    );
  }

  return (
    <>
      <h1>이런 애니는 어떠세요?</h1>
      <SuggestedAnimesContainer>
        {animes.map((anime) => (
          <AnimeCard
            id={anime.id}
            key={anime.id}
            thumbnail={anime.thumbnail}
            title={anime.title}
            starScoreAvg={anime.starScoreAvg}
            onClick={() => navigate(`/animes/${anime.id}`)}
          />
        ))}
      </SuggestedAnimesContainer>
    </>
  );
}
