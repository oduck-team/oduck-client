import { ADMIN_BASE_URL } from "@/admins/constants/config";
import AnimeApi from "@/features/animes/api/AnimeApi";
import { del, get, post } from "@/libs/api";

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

export interface GetAnimePagetQuery {
  /** 검색어 1-50자 */
  query: string;

  /** 검색 타입 */
  queryType: "TITLE" | "SERIES";

  page: number;

  /** 요청당 최대 출력 개수 */
  size: number;

  direction: "ASC" | "DESC";

  statuses?: AnimeStatus[];

  years?: number;
}

export type PageAnimeResponse = Page<{
  id: number;
  title: string;
  thumbnail: string;
  year: number;
  quarter: AnimeQuarter;
  isReleased: boolean;
  status: AnimeStatus;
  seriesId: number;
  seriesTitle: string;
  bookmarkCount: number;
  starRatingScoreTotal: number;
  starRatingCount: number;
  starRatingAvg: number;
  reviewCount: number;
  viewCount: number;
  createdAt: string;
}>;

export default class AdminAnimeApi extends AnimeApi {
  create(dto: CreateAnimeDto): Promise<void> {
    return post(ADMIN_BASE_URL + "/animes", dto);
  }

  getPageList(query: GetAnimePagetQuery): Promise<PageAnimeResponse> {
    const queryParams: Record<string, string> = {};

    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined) {
        queryParams[key] = String(value);
      }
    });

    const queryString = new URLSearchParams(queryParams).toString();
    return get(ADMIN_BASE_URL + `/animes?${queryString}`);
  }

  delete(id: number) {
    return del(ADMIN_BASE_URL + `/animes/${id}`);
  }
}
