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
  description: "";
  thumbnail: "";
  point: number;
  role?: UserRole;
}

declare interface Profile {
  memberId: number;
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

declare interface Bookmark {
  animeId: number;
  title: string;
  thumbnail: string;
  createdAt: string;
  avgScore: number;
  myScore: number;
}

declare interface Review {
  name: string;
  comment: string;
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
}
