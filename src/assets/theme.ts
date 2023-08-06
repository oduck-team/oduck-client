import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      [key: string]: string;
    };
  }
}

const colors = {
  // blue가 아닌 primary로 작성돠는게 좋을지 리뷰 부탁드립니다.
  blue: {
    "100": "#003371",
    "90": "#00469C",
    "80": "#0057C3",
    "70": "#0064DF",
    "60": "#006EF5",
    "50": "#117CFF",
    "40": "#358FFF",
    "30": "#5DA6FF",
    "20": "#90C2FF",
    "10": "#BEDBFF",
  },
  yellow: {
    "50": "#FFD74E",
  },
  neutral: {
    "100": "#161717",
    "90": "#212222",
    "80": "#414242",
    "70": "#606061",
    "60": "#747475",
    "50": "#9D9D9E",
    "40": "#BCBCBD",
    "30": "#DFDFE0",
    "20": "#EDEDEE",
    "10": "#F4F4F5",
    "05": "#F9F9FA",
  },
  red: {
    "100": "#740000",
    "90": "#9C0000",
    "80": "#C40404",
    "70": "#E00404",
    "60": "#EC0404",
    "50": "#FF1111",
    "40": "#FF3535",
    "30": "#FF5D5D",
    "20": "#FF9090",
    "10": "#FFBEBE",
  },
};

const heading1 = {
  // heading 1 예시입니다.
  fontWeight: "bold",
  fontSize: "28px",
  lineHeight: "150%",
  letterSpacing: 0,
};

export const theme = {
  colors,
  heading1,
};
