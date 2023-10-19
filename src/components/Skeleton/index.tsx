import { SkeletonContainer } from "./style";

export interface SkeletonProps {
  /** 스켈레톤 높이 @default 24 */
  h?: number | "full";
  /** 스켈레톤 넓이 @default 24 */
  w?: number | "full";
  /** 스켈레톤 모서리의 둥근 정도 @default 4 */
  borderRadius?: number | "full";
}

export default function Skeleton({
  h = 24,
  w = 24,
  borderRadius = 4,
}: SkeletonProps) {
  return (
    <SkeletonContainer
      h={h}
      w={w}
      borderRadius={borderRadius === "full" ? 999 : borderRadius}
    />
  );
}
