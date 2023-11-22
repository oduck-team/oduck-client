import { GridAnimeCardSkeletonContainer } from "./GridAnimeCardSkeleton.style";

import AnimeCardSkeleton from ".";

export default function GridAnimeCardSkeleton() {
  return (
    <GridAnimeCardSkeletonContainer>
      <AnimeCardSkeleton />
    </GridAnimeCardSkeletonContainer>
  );
}
