import { createContext } from "react";

import AuthApi from "@/features/auth/api/AuthApi";
import Profile from "@/features/users/api/profile";
import ProfileDev from "@/features/users/api/profileDev";
import { StrictPropsWithChildren } from "@/types";

interface API {
  authApi: AuthApi;
  profile: ProfileDev | Profile;
}

export const OduckApiContext = createContext<API | null>(null);

/** @desc: 서버 Api와 개발용 Api 선택 */
const authApi = new AuthApi();
// const profile = new Profile();
const profile = new ProfileDev();

export function OduckApiProvider({ children }: StrictPropsWithChildren) {
  return (
    <OduckApiContext.Provider value={{ authApi, profile }}>
      {children}
    </OduckApiContext.Provider>
  );
}
