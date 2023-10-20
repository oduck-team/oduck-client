declare interface BaseTimeEntity {
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}

declare type Provider = "kakao" | "google" | "naver";
declare type UserRole = "GUEST" | "ROLE" | "ADMIN";

declare interface User extends BaseTimeEntity {
  name: string;
  memberId: number;
  imageUrl?: string;
  point: number;
  role: Role | null;
}

declare interface Profile {
  name: string;
  description: string;
  backgroundImage: string;
  thumbnail: string;
  activity: {
    reviews: number;
    bookmarks: number;
    likes: number;
    point: number;
  };
  isMine: boolean;
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
