import { useRef } from "react";
import { useNavigate } from "react-router";

import DeferredComponent from "@/components/DeferredComponent";
import Empty from "@/components/Error/Empty";
import AnimeCard, {
  AnimeCardProps,
} from "@/features/animes/components/AnimeCard";
import AnimeCardSkeleton from "@/features/animes/components/AnimeCardSkeleton";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import { SearchedAnimesContainer, SkeletonContainer } from "./style";

interface SearchedAnimesProps {
  isLoading: boolean;
  animes: Omit<AnimeCardProps, "onClick">[];

  /** 다음 페이지 여부 */
  hasNext: boolean;

  /** 다음 페이징 */
  onLoadNext: () => void;
}

export default function SearchedAnimes({
  isLoading,
  animes,
  hasNext,
  onLoadNext,
}: SearchedAnimesProps) {
  const observeRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useIntersectionObserver({
    target: observeRef,
    onIntersect: () => onLoadNext(),
    enabled: hasNext,
  });

  if (isLoading) {
    return (
      <SearchedAnimesContainer>
        <DeferredComponent>
          {Array.from({ length: 4 }, (_, i) => (
            <SkeletonContainer key={i}>
              <AnimeCardSkeleton />
            </SkeletonContainer>
          ))}
        </DeferredComponent>
      </SearchedAnimesContainer>
    );
  }

  if (animes.length === 0) {
    return (
      <SearchedAnimesContainer>
        <Empty message="애니를 찾을 수 없어요" />
      </SearchedAnimesContainer>
    );
  }

  return (
    <SearchedAnimesContainer>
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
      <div ref={observeRef}></div>
    </SearchedAnimesContainer>
  );
}
