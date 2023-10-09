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
  return (
    <>
      {BOOKMARK_RIST.map((bookmark, index) => (
        <BookmarkCard key={index} bookmark={bookmark} />
      ))}
    </>
  );
}
