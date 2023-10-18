import axios from "axios";

import { BASE_URL } from "@/config";

import { ApiError, BaseError } from "../error";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 3 * 1000,
});

// Request interceptor
instance.interceptors.request.use((config) => {
  return config;
});

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    const status = response.status;
    if (status >= 200 && status < 300) {
      return response.data;
    }

    return Promise.reject(response.data);
  },
  (error) => {
    // TODO: 서버 에외에 따른 처리
    if (error.response?.data?.["message"]) {
      return Promise.reject(
        new ApiError(error.response.data, error.response.status),
      );
    }

    if (error.message.startsWith("timeout")) {
      return Promise.reject(new BaseError("Timeout Error", "Network timeout"));
    }

    return Promise.reject(new BaseError("Unknown Error", error.message));
  },
);

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T, T>(...args);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T, T>(...args);
}

export function put<T>(...args: Parameters<typeof instance.put>) {
  return instance.put<T, T>(...args);
}

export function patch<T>(...args: Parameters<typeof instance.patch>) {
  return instance.patch<T, T>(...args);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T, T>(...args);
}

export default {
  get,
  post,
  put,
  patch,
  delete: del,
};
