import { ApiResponse } from "../fetch/type";

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

export function isApiError(response: unknown): response is ApiResponse {
  return (
    typeof response === "object" &&
    response !== null &&
    "result" in response &&
    "status" in response &&
    "success" in response &&
    typeof response.result === "object" &&
    response.result !== null &&
    "timestamp" in response.result &&
    "errMsg" in response.result
  );
}

/** @description 알 수 없는 에러 */
export class UnknownError extends Error {
  originalError: unknown;

  constructor(message: string, originalError: unknown) {
    super(message);
    this.name = "UnknownError";
    this.originalError = originalError;
  }
}
