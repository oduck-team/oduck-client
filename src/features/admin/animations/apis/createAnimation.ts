import { request } from "@/lib/axios";

export type BroadcastType = "TVA" | "OVA" | "ONA" | "MOV";
export type Rating = "ALL" | "TWELVE" | "FIFTEEN" | "ADULT";
export type Status = "ONGOING" | "FINISHED" | "COMING" | "UNKNOWN";

export interface CreateAnimationDto {
  name: string;
  plot: string;
  broadcastType: BroadcastType;
  episodeNumber: number;
  rating: Rating;
  primaryKeyword: string;
  status: Status;
  isReleased: boolean;
  imageUrl: string;
  studioNames: string[];
}

export function createAnimation(dto: CreateAnimationDto) {
  return request.post("/animation", dto);
}
