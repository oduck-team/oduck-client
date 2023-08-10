import "@emotion/react";

// Theme 타입에 colors 프로퍼티를 추가하여 확장합니다.
declare module "@emotion/react" {
  export interface Theme {
    colors: {
      [key: string]: {
        [key: string]: string;
      };
    };
    // 테스트를 위해 임시 추가
    heading1: {
      fontWeight: string;
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
  }
}
