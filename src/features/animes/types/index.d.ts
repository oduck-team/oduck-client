declare interface Series extends BaseTimeEntity {
  id: number;
  title: string;
}

declare type BroadcastType = "TVA" | "OVA" | "ONA" | "MOV";
declare type AnimeRating = "ADULT" | "FIFTEEN" | "TWELVE" | "ALL";
declare type AnimeStatus = "FINISHED" | "ONGOING" | "UPCOMING" | "UNKNOWN";
declare type AnimeQuarter = "Q1" | "Q2" | "Q3" | "Q4";

declare interface Anime extends BaseTimeEntity {
  id: number;
  series?: Series;
  title: string;
  summary: string;
  broadcastType: BroadcastType;
  episodeCount: number;
  thumbnail: string;
  year: number;
  quarter: AnimeQuarter;
  rating: AnimeRating;
  status: AnimeStatus;
  isReleased: boolean;
  viewCount: number;
  reviewCount: number;
  bookmarkCount: number;
}
