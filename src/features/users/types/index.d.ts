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
