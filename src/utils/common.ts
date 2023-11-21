export function isBrowser() {
  return typeof window !== "undefined";
}

type Lang = "ko-KR" | "en-US";
export function compactNumber(data: number | string, lang: Lang = "en-US") {
  if (typeof data === "string") return data;

  return Intl.NumberFormat(lang, {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(data);
}

export function calcStarRatingAvg(score: number | undefined) {
  return score ? Math.floor((score / 2) * 10) / 10 : 0;
}
