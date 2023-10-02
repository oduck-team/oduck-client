function getRandomNum(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArrayElement<T>(arr: T[]): T {
  const randomIndex = getRandomNum(0, arr.length - 1);
  return arr[randomIndex];
}

export function getAnimeMock() {
  const id = getRandomNum(1000, 1);
  const broadcastTypes: BroadcastType[] = ["TVA", "OVA", "ONA", "MOV"];
  const animeRatings: AnimeRating[] = ["ADULT", "FIFTEEN", "TWELVE", "ALL"];
  const animeStatuses: AnimeStatus[] = [
    "FINISHED",
    "ONGOING",
    "UPCOMING",
    "UNKNOWN",
  ];

  return {
    id,
    title: `애니 제목 ${id}`,
    summary: `애니 줄거리는 ${id}입니다`,
    broadcastType: getRandomArrayElement(broadcastTypes),
    episodeCount: getRandomNum(13, 100),
    thumbnail: "",
    year: getRandomNum(1999, 2030),
    quarter: getRandomNum(1, 4) as 1 | 2 | 3 | 4,
    rating: getRandomArrayElement(animeRatings),
    status: getRandomArrayElement(animeStatuses),
    isReleased: true,
    viewCount: getRandomNum(1, 9999),
    reviewCount: getRandomNum(1, 3000),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
  };
}
