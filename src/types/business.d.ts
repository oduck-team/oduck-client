declare interface BaseTimeEntity {
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}

declare interface Series extends BaseTimeEntity {
  id: number;
  title: string;
}

declare type BroadcastType = "TVA" | "OVA" | "ONA" | "MOV";
declare type AnimeRating = "ADULT" | "FIFTEEN" | "TWELVE" | "ALL";
declare type AnimeStatus = "FINISHED" | "ONGOING" | "UPCOMING" | "UNKNOWN";

declare interface Anime extends BaseTimeEntity {
  id: number;
  series?: Series;
  title: string;
  summary: string;
  broadcastType: BroadcastType;
  episodeCount: number;
  thumbnail: string;
  year: number;
  quarter: number;
  rating: AnimeRating;
  status: AnimeStatus;
  isReleased: boolean;
  viewCount: number;
  reviewCount: number;
}
