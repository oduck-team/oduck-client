import BookmarkCardSkeleton from "@/features/bookmarks/components/BookmarkCardSkeleton";

import BookmarkCard from "./BookmarkCard";
import EmptyList from "./EmptyList";

interface BookmarkListProps {
  isMine: boolean;
  list: Bookmark[];
  isLoading: boolean;
}

export default function BookmarkList({
  isMine,
  list,
  isLoading,
}: BookmarkListProps) {
  return (
    <>
      {isLoading &&
        Array.from({ length: 2 }, (_, index) => (
          <BookmarkCardSkeleton key={index} />
        ))}

      {list.length === 0 && !isLoading && (
        <EmptyList
          message={`입덕한 애니가 없어요.${
            isMine ? " 애니를 추가해 보세요" : ""
          }`}
          buttonText="애니 추가하러 가기"
          linkTo="/animes"
          isMine={isMine}
        />
      )}

      {list.map((bookmark) => (
        <BookmarkCard
          key={bookmark.animeId}
          bookmark={bookmark}
          isMine={isMine}
        />
      ))}
    </>
  );
}
