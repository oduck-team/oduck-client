import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import useAdminApi from "@/admins/hooks/useAdminApi";

import { CreateAnimeDto } from "../api/AdminAnimeApi";

import useAnimeForm from "./useAnimeForm";

export default function useCreateAnime() {
  const { animeApi } = useAdminApi();
  const form = useAnimeForm({
    seriesId: 0,
    title: "",
    summary: "",
    broadcastType: "TVA",
    episodeCount: 13,
    thumbnail: "",
    year: 2023,
    quarter: "Q1",
    rating: "ALL",
    status: "UNKNOWN",
    originalAuthorIds: [],
    studioIds: [],
    voiceActors: [],
    genreIds: [],
  });

  const createAnimeMutation = useMutation<
    void,
    AxiosError,
    CreateAnimeDto,
    unknown
  >({
    mutationFn: (dto: CreateAnimeDto) => animeApi.create(dto),
    onSuccess: () => {
      // TODO: 애니 목록
    },
  });

  return { form, createAnimeMutation };
}
