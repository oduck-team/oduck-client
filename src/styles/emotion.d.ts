import "@emotion/react";

import { Colors } from "./colors";
import { Container } from "./container";
import { MediaQuery } from "./mediaQuery";
import { Typography } from "./typography";
import { ZIndex } from "./zIndex";

declare module "@emotion/react" {
  /**
   * emotion의 Theme 타입을 확장합니다
   * theme:Theme을 사용하는 코드에서 타입 안전성과 코드 자동완성을 제공합니다
   * */
  export interface Theme {
    colors: {
      primary: Colors["blue"];
      secondary: Colors["yellow"];
      warn: Colors["red"];
      neutral: Colors["neutral"];
    };
    typo: Typography;
    zIndex: ZIndex;
    mq: MediaQuery;
    container: Container;
    maxWidth: string;
  }
}
