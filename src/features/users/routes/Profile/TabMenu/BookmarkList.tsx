import BookmarkCard from "./BookmarkCard";
import EmptyList from "./EmptyList";

interface BookmarkListProps {
  isMine: boolean;
  list: Bookmark[];
}

export default function BookmarkList({ isMine, list }: BookmarkListProps) {
  return (
    <>
      {list.length === 0 && (
        <EmptyList
          message="작성한 리뷰가 없어요. 리뷰를 작성해 보세요."
          buttonText="리뷰 작성하기"
          linkTo="/animes"
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
