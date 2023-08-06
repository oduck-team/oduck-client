import "@emotion/react";

// Theme 타입에 colors 프로퍼티를 추가하여 확장합니다.
declare module "@emotion/react" {
  export interface Theme {
    colors: {
      [key: string]: string;
    };
  }
}
