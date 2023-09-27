/** @description 베이스 에러 클래스 */
export class BaseError extends Error {
  status: number | undefined;

  constructor(name: string, message: string, status?: number) {
    super(message);
    this.name = name;
    this.status = status;
  }
}

/** @description 500번대 이상의 서버 에러 */
export class ServerError extends BaseError {
  constructor(message: string, status?: number) {
    super("ServerError", message, status);
  }
}

/** @description 400번대 서버 api 에러 */
export class ApiError extends BaseError {
  constructor(message: string, status?: number) {
    super("ApiError", message, status);
  }
}
