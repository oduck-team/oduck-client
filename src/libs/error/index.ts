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

/** @description 유효성 검사 에러 */
interface FieldError {
  field: string; // 필드명
  rejectedValue: string; // 요청 거부된 원본 값
  reason: string; // 이유
}

/** @description 400번대 서버 api 에러 */
export class ApiError extends BaseError {
  fieldErrors?: FieldError[];

  constructor(message: string, status?: number, fieldErrors = []) {
    super("ApiError", message, status);
    this.fieldErrors = fieldErrors;
  }
}
