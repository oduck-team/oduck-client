import "@emotion/react";

import { Colors } from "./colors";
import { Typography } from "./typography";

// Theme 타입에 colors, typo 프로퍼티를 추가하여 확장합니다.
declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: Colors["blue"];
      secondary: Colors["yellow"];
      warn: Colors["red"];
    };
    typo: Typography;
  }
}
