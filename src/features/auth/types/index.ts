export type Providers = "kakao" | "google" | "naver";
export type Role = "GUEST" | "ROLE" | "ADMIN";

export interface IUser {
  name: string;
  memberId: number;
  imageUrl: string | undefined;
  point: number;
  role: Role | null;
  createdAt: string;
  updateAt: string;
}
