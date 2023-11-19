import { useEffect, useMemo, useState } from "react";

import { AnimeSort, EpisodeCount, GetAnimesQuery } from "../api/AnimeApi";

import useAnimes from "./useAnimes";
import useGeneres from "./useGenres";

export interface FilteredOption<T> {
  label: string;
  value: T;
}

export type GenreFilter = FilteredOption<string> & { type: "genre" };
export type SeasonFilter = FilteredOption<{
  year: number;
  quarter?: AnimeQuarter;
}> & { type: "season" };
export type BroadCastFilter = FilteredOption<BroadcastType> & {
  type: "broadcast";
};
export type StatusFilter = FilteredOption<AnimeStatus> & { type: "status" };
export type EpisodeCountFilter = FilteredOption<EpisodeCount> & {
  type: "episodeCount";
};

export type AllFilterTypes =
  | GenreFilter
  | SeasonFilter
  | BroadCastFilter
  | StatusFilter
  | EpisodeCountFilter;

const REQUEST_SIZE = 10; // 요청당 개수

/**
 * @description 애니메이션 목록을 필터와 함께 조회합니다
 */
export default function useFilterAnimes() {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const { data: initialGenres } = useGeneres();
  const [genres, setGenres] = useState<GenreFilter[]>([]);
  /** 장르 목록을 받아온후, 가공 */
  useEffect(() => {
    if (!initialGenres) return;
    setGenres(
      initialGenres.map((genre) => ({
        label: genre.name,
        value: genre.id.toString(),
        type: "genre",
      })),
    );
  }, [initialGenres]);

  const [selectedFilters, setSelectedFilters] = useState<AllFilterTypes[]>([]); // 선택한 필터
  const [filterParams, setFilterParams] = useState<GetAnimesQuery>({
    size: REQUEST_SIZE,
    sort: "LATEST",
  }); // 요청 필터
  const animesQuery = useAnimes({ autoFetch: true, queryParams: filterParams });

  /** 상단 Tab 최신순, 리뷰순, 평점순 */
  const changeSort = (sort: AnimeSort) => {
    const queryParams = filterToQueryParams(selectedFilters);
    setFilterParams({
      ...queryParams,
      sort: sort,
    });
  };

  const filterOptions = useMemo(
    () => ({
      genres,
      seasons,
      broadcastTypes,
      statuses,
      episodeCounts,
    }),
    [genres],
  );

  /** 필터 추가 */
  const addFilter = (option: AllFilterTypes) => {
    // 이미 있다면 제거
    if (selectedFilters.some((f) => f.label === option.label)) {
      setSelectedFilters(
        selectedFilters.filter((f) => f.label !== option.label),
      );
      return;
    }
    setSelectedFilters([...selectedFilters, option]);
  };

  /** 필터 제거 */
  const removeFilter = ({ label }: AllFilterTypes) => {
    if (selectedFilters.some((f) => f.label === label)) {
      setSelectedFilters(selectedFilters.filter((f) => f.label !== label));
    }
  };

  /** 필터 초기화 */
  const resetFilter = () => {
    setSelectedFilters([]);
    setFilterParams({});
    animesQuery.refetch();
  };

  /** 필터 바텀시트 열기 */
  const bottomSheetOpen = () => {
    setBottomSheetVisible(true);
  };

  /** 필터 바텀시트 닫기 */
  const bottomSheetClose = () => {
    setBottomSheetVisible(false);
  };

  /** 필터 적용하기 */
  const applyFilters = () => {
    const queryParams = filterToQueryParams(selectedFilters);
    setFilterParams(queryParams);
    setBottomSheetVisible(false);
  };

  /** 선택한 필터를 쿼리 파라미터로 변환 */
  const filterToQueryParams = (filters: AllFilterTypes[]): GetAnimesQuery => {
    const queryParams: GetAnimesQuery = {};

    filters.forEach((filter) => {
      switch (filter.type) {
        case "genre":
          if (!queryParams.genreIds) queryParams.genreIds = [];
          queryParams.genreIds.push(Number(filter.value));
          break;
        case "season":
          if (!queryParams.years) queryParams.years = [];
          queryParams.years.push(filter.value.year);
          if (filter.value.quarter) {
            if (!queryParams.quarters) queryParams.quarters = [];
            queryParams.quarters.push(filter.value.quarter);
          }
          break;
        case "broadcast":
          if (!queryParams.broadcastTypes) queryParams.broadcastTypes = [];
          queryParams.broadcastTypes.push(filter.value);
          break;
        case "status":
          if (!queryParams.statuses) queryParams.statuses = [];
          queryParams.statuses.push(filter.value);
          break;
        case "episodeCount":
          if (!queryParams.episodeCounts) queryParams.episodeCounts = [];
          queryParams.episodeCounts.push(filter.value);
          break;
      }
    });

    return queryParams;
  };

  return {
    animesQuery,
    filterOptions,
    selectedFilters,
    changeSort,
    addFilter,
    removeFilter,
    resetFilter,
    applyFilters,
    bottomSheetVisible,
    bottomSheetOpen,
    bottomSheetClose,
  };
}

const seasons: SeasonFilter[] = [
  {
    type: "season",
    label: "2023년 1분기",
    value: {
      year: 2023,
      quarter: "Q1",
    },
  },
  {
    type: "season",
    label: "2023년 2분기",
    value: {
      year: 2023,
      quarter: "Q2",
    },
  },
  {
    type: "season",
    label: "2023년 3분기",
    value: {
      year: 2023,
      quarter: "Q3",
    },
  },
  {
    type: "season",
    label: "2023년 4분기",
    value: {
      year: 2023,
      quarter: "Q4",
    },
  },
  {
    type: "season",
    label: "2022년",
    value: {
      year: 2022,
    },
  },
  {
    type: "season",
    label: "2021년",
    value: {
      year: 2021,
    },
  },
  {
    type: "season",
    label: "2020년",
    value: {
      year: 2020,
    },
  },
  {
    type: "season",
    label: "2019년",
    value: {
      year: 2019,
    },
  },
  {
    type: "season",
    label: "2018년",
    value: {
      year: 2018,
    },
  },
];

const broadcastTypes: BroadCastFilter[] = [
  { type: "broadcast", label: "TVA", value: "TVA" },
  { type: "broadcast", label: "OVA", value: "OVA" },
  { type: "broadcast", label: "극장판", value: "MOV" },
];

const statuses: StatusFilter[] = [
  { type: "status", label: "방영중", value: "ONGOING" },
  { type: "status", label: "완결", value: "FINISHED" },
  { type: "status", label: "예정", value: "UPCOMING" },
];

const episodeCounts: EpisodeCountFilter[] = [
  {
    type: "episodeCount",
    label: "12화 이하",
    value: "UNDER_TWELVE",
  },
  {
    type: "episodeCount",
    label: "24화 이하",
    value: "UNDER_TWENTY_FOUR",
  },
  {
    type: "episodeCount",
    label: "100화 이하",
    value: "UNDER_HUNDRED",
  },
  {
    type: "episodeCount",
    label: "100화 이상",
    value: "OVER_HUNDRED",
  },
];
