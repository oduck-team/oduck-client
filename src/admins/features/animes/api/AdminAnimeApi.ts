import { ADMIN_BASE_URL } from "@/admins/constants/config";
import AnimeApi from "@/features/animes/api/AnimeApi";
import { post } from "@/libs/api";

export interface CreateAnimeDto {
  seriesId: number;
  title: string;
  summary: string;
  broadcastType: BroadcastType;
  episodeCount: number;
  thumbnail: string;
  year: number;
  quarter: AnimeQuarter;
  rating: AnimeRating;
  status: AnimeStatus;
  // isReleased: boolean;
  originalAuthorIds: number[];
  studioIds: number[];
  voiceActors: { id: number; name: string; part: string }[];
  genreIds: number[];
}

export default class AdminAnimeApi extends AnimeApi {
  create(dto: CreateAnimeDto): Promise<void> {
    return post(ADMIN_BASE_URL + "/animes", dto);
  }
}
