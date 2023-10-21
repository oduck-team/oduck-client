import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef } from "react";

import Loader from "@/components/Loader";
import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import BookmarkCard from "./BookmarkCard";

const BOOKMARK_RIST = [
  {
    title: "레벨 1이지만 유니크 스킬로 최강이 되었습니다",
    image:
      "https://i.namu.wiki/i/v8ca2gF_MPV_L4QZGoN449G29Nt8vy3PtSLKv1T9XwmZBJ8p1GTz3S3Y32sXB-eoGDv5npoGXzpD6fASoQFLwg.webp",
    rating: 10,
    myRating: 9,
    createdAt: "2023.07.30",
  },
  {
    title:
      "아주 긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴긴 제목을 가지고 있는 애니메이션",
    image: "https://url.kr/4gtucf",
    rating: 3,
    createdAt: "2023.07.29",
  },
];

export default function BookmarkList() {
  const targetRef = useRef(null);
  const {
    user: { memberId },
  } = useAuth();
  const { profile } = useApi();
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["bookmarks", memberId],
    ({ pageParam }) => profile.getBookmark(memberId, pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.lastId === -1 ? undefined : lastPage.lastId;
      },
      select: (data) => ({
        pages: data.pages.flatMap((page) => page.items),
        pageParams: data.pageParams,
      }),
    },
  );

  useIntersectionObserver({
    target: targetRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  console.log(data);
  return (
    <>
      {BOOKMARK_RIST.map((bookmark, index) => (
        <BookmarkCard key={index} bookmark={bookmark} />
      ))}

      <div
        ref={targetRef}
        style={{ backgroundColor: "hotpink", height: "15px" }}
      ></div>

      {isLoading && <Loader />}
    </>
  );
}
