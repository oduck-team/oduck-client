import { get } from "@/libs/api";

/* 애니 조회 정렬 기준*/
export type AnimeSort = "LATEST" | "REVIEW_COUNT" | "SCORE";
export type Direction = "ASC" | "DESC";
export type EpisodeCount =
  | "UNDER_TWELVE"
  | "UNDER_TWENTY_FOUR"
  | "UNDER_FORTY_EIGHT"
  | "UNDER_HUNDRED"
  | "OVER_HUNDRED";

export interface GetAnimesQuery {
  /* 검색어 */
  query?: string;

  /* 한 페이지당 출력 개수 */
  size?: number;

  /* 조회 정렬 기준*/
  sort?: AnimeSort;

  /* 정렬 방향 */
  direction?: Direction;

  /* 다음 요청 cursor */
  cursor?: string;

  genreIds?: number[];

  broadcastTypes?: BroadcastType[];

  statuses?: AnimeStatus[];

  episodeCounts?: EpisodeCount[];

  years?: number[];

  quarters?: AnimeQuarter[];
}

export type DetailAnimeResponse = Omit<
  Anime,
  "series" | "isReleased" | "viewCount"
> & {
  originalAuthors: string[];
  voiceActors: { name: string; part: string }[];
  genres: string[];
  studios: string[];
};

type ListAnimeResponse = CursorPage<{
  id: number;
  title: string;
  thumbnail: string;
  starScoreAvg: number;
}>;

export default class AnimeApi {
  getById(id: number): Promise<DetailAnimeResponse> {
    return get(`/animes/${id}`);
  }

  getList(query: GetAnimesQuery): Promise<ListAnimeResponse> {
    const queryParams: Record<string, string> = {};

    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined) {
        queryParams[key] = String(value);
      }
    });

    const queryString = new URLSearchParams(queryParams).toString();
    return get(`/animes?${queryString}`);
  }
}
