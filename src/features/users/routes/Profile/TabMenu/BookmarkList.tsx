import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef } from "react";

import useAuth from "@/features/auth/hooks/useAuth";
import { useApi } from "@/hooks/useApi";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import BookmarkCard from "./BookmarkCard";
import { Target } from "./BookmarkList.style";

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

  return (
    <>
      {data?.pages.map((bookmark) => (
        <BookmarkCard key={bookmark.animeId} bookmark={bookmark} />
      ))}

      <Target ref={targetRef} />

      {isLoading && <span>로딩중</span>}
    </>
  );
}
