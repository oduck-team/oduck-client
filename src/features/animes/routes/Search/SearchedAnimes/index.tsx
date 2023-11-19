import { useRef } from "react";

import DeferredComponent from "@/components/DeferredComponent";
import Empty from "@/components/Error/Empty";
import AnimeCard, {
  AnimeCardProps,
} from "@/features/animes/components/AnimeCard";
import AnimeCardSkeleton from "@/features/animes/components/AnimeCardSkeleton";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import { SearchedAnimesContainer } from "./style";

interface SearchedAnimesProps {
  isLoading: boolean;
  animes: AnimeCardProps[];

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

  useIntersectionObserver({
    target: observeRef,
    onIntersect: () => onLoadNext(),
    enabled: hasNext,
  });

  if (isLoading) {
    return (
      <SearchedAnimesContainer>
        <DeferredComponent>
          <AnimeCardSkeleton />
          <AnimeCardSkeleton />
          <AnimeCardSkeleton />
          <AnimeCardSkeleton />
          <AnimeCardSkeleton />
          <AnimeCardSkeleton />
          <AnimeCardSkeleton />
          <AnimeCardSkeleton />
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
        <li key={anime.id}>
          <AnimeCard
            id={anime.id}
            thumbnail={anime.thumbnail}
            title={anime.title}
            starScoreAvg={anime.starScoreAvg}
          />
        </li>
      ))}
      <div ref={observeRef}></div>
    </SearchedAnimesContainer>
  );
}
