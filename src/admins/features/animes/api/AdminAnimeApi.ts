import { ADMIN_BASE_URL } from "@/admins/constants/config";
import AnimeApi from "@/features/animes/api/AnimeApi";
import { post } from "@/libs/api";

export interface CreateAnimeDto {
  /** 시리즈 id */
  seriesId: number;
  /** 제목 */
  title: string;
  /** 줄거리 */
  summary: string;
  /** 방영 종류 */
  broadcastType: BroadcastType;
  /** 에피소드 수 */
  episodeCount: number;
  /** 썸네일 이미지 경로 */
  thumbnail: string;
  /** 년도 */
  year: number;
  /** 분기 */
  quarter: AnimeQuarter;
  /** 시청연령 */
  rating: AnimeRating;
  /** 방영 상태 */
  status: AnimeStatus;
  /** 사용자들에게 공개 여부 */
  isReleased: boolean;
  /** 원작자 id 목록 */
  originalAuthorIds: number[];
  /** 제작사 id 목록 */
  studioIds: number[];
  /** 성우 id 목록 */
  voiceActors: { id: number; name: string; part: string }[];
  /** 장르 id 목록 */
  genreIds: number[];
}

export default class AdminAnimeApi extends AnimeApi {
  create(dto: CreateAnimeDto): Promise<void> {
    return post(ADMIN_BASE_URL + "/animes", dto);
  }
}
