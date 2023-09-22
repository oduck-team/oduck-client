/** @description 500번대 이상의 서버 에러 */
export class ServerError extends Error {
  status: number | undefined;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "ServerError";
    this.status = status;
  }
}

/** @description 400번대 서버 api 에러 */
export class ApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ApiError";
  }
}
