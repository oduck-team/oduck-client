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
