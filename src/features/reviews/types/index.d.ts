declare interface Review {
  reviewId: number;
  name: string;
  score: number;
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

declare interface AttractionPoint {
  drawing: boolean;
  story: boolean;
  music: boolean;
  character: boolean;
  voiceActor: boolean;
}
