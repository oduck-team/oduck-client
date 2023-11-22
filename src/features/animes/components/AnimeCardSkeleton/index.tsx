import Skeleton from "@/components/Skeleton";

import { AnimeCardSkeletonContainer } from "./style";

export default function AnimeCardSkeleton() {
  return (
    <AnimeCardSkeletonContainer aria-busy="true">
      <Skeleton w={"full"} h={110} />
      <Skeleton w={60} h={22} wUnit="%" />
      <Skeleton w={30} h={22} wUnit="%" />
    </AnimeCardSkeletonContainer>
  );
}
