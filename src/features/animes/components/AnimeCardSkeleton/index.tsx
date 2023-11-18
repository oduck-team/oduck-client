import Skeleton from "@/components/Skeleton";

import { AnimeCardSkeletonContainer } from "./style";

export default function AnimeCardSkeleton() {
  return (
    <AnimeCardSkeletonContainer aria-busy="true">
      <Skeleton w={160} h={110} />
      <Skeleton w={130} h={22} />
      <Skeleton w={40} h={22} />
    </AnimeCardSkeletonContainer>
  );
}
