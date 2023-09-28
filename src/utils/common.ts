export function isBrowser() {
  return typeof window !== "undefined";
}

export function isNicknameRegxCheck(nickname: string) {
  const namePattern = /^(?=.*[a-zA-Z가-힣])[A-Za-z가-힣0-9]{2,10}$/;
  return namePattern.test(nickname);
}
