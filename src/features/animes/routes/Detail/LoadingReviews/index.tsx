import { v4 as uuid } from "uuid";

import Skeleton from "@/components/Skeleton";

import { ReviewSkeleton } from "./style";

export default function LoadingReviews() {
  return (
    <ul>
      {Array.from({ length: 7 }, () => (
        <ReviewSkeleton aria-busy="true" key={uuid()}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Skeleton w={100} h={16} />
            <Skeleton w={24} h={24} borderRadius="full" />
          </div>
          <Skeleton w={75} wUnit="%" h={18} />
          <Skeleton w={60} wUnit="%" h={18} />
        </ReviewSkeleton>
      ))}
    </ul>
  );
}
