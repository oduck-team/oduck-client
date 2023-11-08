declare interface Review {
  name: string;
  content: string;
  isSpoiler: boolean;
  isLiked: boolean;
  likeCount: number;
  createdAt: string;
  anime: {
    animeId: number;
    title: string;
    thumbnail: string;
    avgScore: number;
  };
}
