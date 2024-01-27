import { createContext } from "react";

import AnimeApi from "@/features/animes/api/AnimeApi";
import GenreApi from "@/features/animes/api/GenreApi";
import AuthApi from "@/features/auth/api/AuthApi";
import BookmarkApi from "@/features/bookmarks/api/BookmarkApi";
import FileApi from "@/features/files/api/FileApi";
import ReviewApi from "@/features/reviews/api/review";
import ProfileApi from "@/features/users/api/profile";
import { StrictPropsWithChildren } from "@/types";

interface API {
  authApi: AuthApi;
  profile: ProfileApi;
  animeApi: AnimeApi;
  genreApi: GenreApi;
  bookmarkApi: BookmarkApi;
  fileApi: FileApi;
  reviewApi: ReviewApi;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const OduckApiContext = createContext<API | null | any>(null);

/** @desc: api */
const authApi = new AuthApi();
const profile = new ProfileApi();
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
