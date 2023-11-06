import { createContext } from "react";

import AnimeApi from "@/features/animes/api/AnimeApi";
import GenreApi from "@/features/animes/api/GenreApi";
import AuthApi from "@/features/auth/api/AuthApi";
import BookmarkApi from "@/features/bookmarks/api/BookmarkApi";
import FileApi from "@/features/files/api/FileApi";
import ReviewApi from "@/features/reviews/api/review";
import ProfileApi from "@/features/users/api/profile";
import ProfileDevApi from "@/features/users/api/profileDev";
import { StrictPropsWithChildren } from "@/types";

interface API {
  authApi: AuthApi;
  profile: ProfileDevApi | ProfileApi;
  animeApi: AnimeApi;
  genreApi: GenreApi;
  bookmarkApi: BookmarkApi;
  fileApi: FileApi;
  reviewApi: ReviewApi;
}

export const OduckApiContext = createContext<API | null>(null);

/** @desc: 서버 Api와 개발용 Api 선택 */
const authApi = new AuthApi();
const profile = new ProfileApi();
// const profile = new ProfileDevApi();
const animeApi = new AnimeApi();
const genreApi = new GenreApi();
const bookmarkApi = new BookmarkApi();
const fileApi = new FileApi();
const reviewApi = new ReviewApi();

export function OduckApiProvider({ children }: StrictPropsWithChildren) {
  return (
    <OduckApiContext.Provider
      value={{
        authApi,
        profile,
        animeApi,
        genreApi,
        bookmarkApi,
        reviewApi,
        fileApi,
      }}
    >
      {children}
    </OduckApiContext.Provider>
  );
}
