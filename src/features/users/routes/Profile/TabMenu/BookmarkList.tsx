import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { useRef } from "react";

import useIntersectionObserver from "@/hooks/useIntersectionObserver";

import BookmarkCard from "./BookmarkCard";
import { Target } from "./BookmarkList.style";

interface BookmarkListProps {
  list: Bookmark[];
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<Bookmark, unknown>>;
  hasNextPage: boolean | undefined;
}

export default function BookmarkList({
  list,
  fetchNextPage,
  hasNextPage,
}: BookmarkListProps) {
  const targetRef = useRef(null);

  useIntersectionObserver({
    target: targetRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  return (
    <>
      {list.map((bookmark) => (
        <BookmarkCard key={bookmark.animeId} bookmark={bookmark} />
      ))}

      <Target ref={targetRef} />
    </>
  );
}
