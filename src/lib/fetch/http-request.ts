import { ApiError, ServerError, UnknownError, isApiError } from "@/lib/error";

type RequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface RequestConfig {
  baseURL?: string;
}

interface RequestOptions {
  query?: { [key: string]: string };
  header?: HeadersInit;
  body?: object;
}

export class HttpRequest {
  private config: RequestConfig;

  constructor(config: RequestConfig) {
    this.config = config;
  }

  async get<T>(url: string, options?: RequestOptions) {
    return this.handleRequest<T>(url, "GET", options);
  }

  async post<T>(url: string, options?: RequestOptions) {
    return this.handleRequest<T>(url, "POST", options);
  }

  async put<T>(url: string, options?: RequestOptions) {
    return this.handleRequest<T>(url, "PUT", options);
  }

  async patch<T>(url: string, options?: RequestOptions) {
    return this.handleRequest<T>(url, "PATCH", options);
  }

  async delete<T>(url: string, options?: RequestOptions) {
    return this.handleRequest<T>(url, "DELETE", options);
  }

  private async handleRequest<T>(
    url: string,
    method: RequestMethod,
    options?: RequestOptions,
  ) {
    // 요청 url의 query string을 만든다
    const qs = options?.query ?? {};
    const queryString = Object.keys(qs).length
      ? "?" + new URLSearchParams(qs).toString()
      : "";

    // url을 제외한 매개변수 생성
    const parameters = this.getRequestParams(
      method,
      options?.header,
      options?.body,
    );

    const result = await fetch(
      this.config.baseURL + url + queryString,
      parameters,
    );

    if (!result.ok) {
      await this.handleError(result);
    }

    return result.json() as T;
  }

  private getRequestParams(
    method: RequestMethod,
    headers?: HeadersInit,
    body?: object,
  ) {
    const params: RequestInit = { method };

    if (method === "GET") {
      return params;
    }

    params.headers = {
      "Content-Type": "application/json; charset=UTF-8",
      ...headers,
    };
    params.body = JSON.stringify(body);

    return params;
  }

  private async handleError(e: unknown) {
    if (!this.isFetchResponse(e)) {
      throw new Error(this.getErrorMessage(e));
    }

    if (e.status >= 500) {
      throw new ServerError(this.getErrorMessage(e), e.status);
    }

    const data = await e.json();
    if (isApiError(data)) {
      throw new ApiError(data.result.errMsg);
    }

    throw new UnknownError(this.getErrorMessage(e), e);
  }

  private isFetchResponse(response: unknown): response is Response {
    return response instanceof Response;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private getErrorMessage(e: any) {
    return (
      e.message ||
      e.msg ||
      e.errMsg ||
      e.error ||
      e.statusText ||
      JSON.stringify(e)
    );
  }
}
