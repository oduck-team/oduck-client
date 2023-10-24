import BookmarkCard from "./BookmarkCard";

interface BookmarkListProps {
  list: Bookmark[];
}

export default function BookmarkList({ list }: BookmarkListProps) {
  return (
    <>
      {list.map((bookmark) => (
        <BookmarkCard key={bookmark.animeId} bookmark={bookmark} />
      ))}
    </>
  );
}
