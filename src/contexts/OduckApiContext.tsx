import { createContext } from "react";

import Profile from "@/api/profile";
import ProfileDev from "@/api/profileDev";
import { StrictPropsWithChildren } from "@/types";

interface API {
  profile: ProfileDev | Profile;
}

export const OduckApiContext = createContext<API | null>(null);

/** @desc: 서버 Api와 개발용 Api 선택 */

// const profile = new Profile();
const profile = new ProfileDev();

export function OduckApiProvider({ children }: StrictPropsWithChildren) {
  return (
    <OduckApiContext.Provider value={{ profile }}>
      {children}
    </OduckApiContext.Provider>
  );
}
