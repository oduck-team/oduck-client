import { useCallback, useReducer } from "react";

import { BASE_URL } from "@/config";
import { ApiError } from "@/lib/error";

interface State<T> {
  data?: T;
  error?: Error;
  isLoading: boolean;
  isFetched: boolean;
  isError: boolean;
}

type Action<T> =
  | { type: "loading" }
  | { type: "fetched"; payload: T }
  | { type: "error"; payload: Error };

// fetch API RequestInit의 method가 string이므로 오타 방지를 위한 확장 인터페이스
export interface RequestOptions extends RequestInit {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
}

export default function useFetch<T>() {
  const initialState: State<T> = {
    data: undefined,
    error: undefined,
    isLoading: false,
    isFetched: false,
    isError: false,
  };

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case "loading":
        return {
          ...state,
          isLoading: true,
          isFetched: false,
          isError: false,
        };
      case "fetched":
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          isFetched: true,
          isError: false,
        };
      case "error":
        return {
          ...state,
          error: action.payload,
          isLoading: false,
          isFetched: false,
          isError: true,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const fetcher = useCallback(async (url: string, options?: RequestOptions) => {
    dispatch({ type: "loading" });

    try {
      const response = await fetch(
        BASE_URL + url,
        getRequestParams(options ?? { method: "GET" }),
      );

      if (response.status >= 500) {
        throw new Error(response.statusText);
      }
      const data = await response.json();

      // TODO: 서버 응답 머지시 반영
      if (response.status >= 400) {
        throw new ApiError(data.message ?? response.statusText);
      }

      dispatch({ type: "fetched", payload: data as T });
    } catch (error) {
      dispatch({ type: "error", payload: error as Error });
    }
  }, []);

  return { ...state, fetcher };
}

export function getRequestParams(options: RequestOptions) {
  const params: RequestOptions = {
    ...options,
    credentials: "include",
  };

  if (options.method === "GET" || options.method === "DELETE") {
    return params;
  }

  params.headers = {
    "Content-Type": "application/json; charset=UTF-8",
    ...params.headers,
  };

  return params;
}
