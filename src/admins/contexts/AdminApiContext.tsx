import { PropsWithChildren, createContext } from "react";

import AdminAnimeApi from "../features/animes/api/AdminAnimeApi";
import AdminGenreApi from "../features/animes/api/AdminGenreApi";
import AdminOriginalAuthorApi from "../features/animes/api/AdminOriginalAuthorApi";
import AdminSeriesApi from "../features/animes/api/AdminSeriesApi";
import AdminStudioApi from "../features/animes/api/AdminStudioApi";
import AdminVoiceActorApi from "../features/animes/api/AdminVoiceActorApi";

interface AdminApi {
  animeApi: AdminAnimeApi;
  originalAuthorApi: AdminOriginalAuthorApi;
  genreApi: AdminGenreApi;
  studioApi: AdminStudioApi;
  voiceActorApi: AdminVoiceActorApi;
  seriesApi: AdminSeriesApi;
}

export const AdminApiContext = createContext<AdminApi | null>(null);

export function AdminApiProvider({ children }: PropsWithChildren) {
  const animeApi = new AdminAnimeApi();
  const originalAuthorApi = new AdminOriginalAuthorApi();
  const genreApi = new AdminGenreApi();
  const studioApi = new AdminStudioApi();
  const voiceActorApi = new AdminVoiceActorApi();
  const seriesApi = new AdminSeriesApi();

  return (
    <AdminApiContext.Provider
      value={{
        animeApi,
        originalAuthorApi,
        genreApi,
        studioApi,
        voiceActorApi,
        seriesApi,
      }}
    >
      {children}
    </AdminApiContext.Provider>
  );
}
