declare interface Review {
  name: string;
  content: string;
  isSpoiler: boolean;
  isLike: boolean;
  likeCount: number;
  createdAt: string;
  anime: {
    animeId: number;
    title: string;
    thumbnail: string;
    avgScore: number;
  };
}
