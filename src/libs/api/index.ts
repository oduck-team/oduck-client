import axios from "axios";

import { BASE_URL } from "@/config";

// import { ApiError, BaseError } from "../error";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 3 * 1000,
  withCredentials: true,
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
    return Promise.reject(error);
    //TODO: 오류 반환을 어떻게 할지 정하기
    // if (error.response?.status >= 400 && error.response?.status < 500) {

    //   return Promise.reject(
    //     new ApiError(
    //       error.response.data.message ?? "API Error",
    //       error.response.status,
    //       error.response.data.fieldErrors,
    //     ),
    //   );
    // }

    // if (error.message.startsWith("timeout")) {
    //   return Promise.reject(new BaseError("Timeout Error", "Network timeout"));
    // }

    // return Promise.reject(new BaseError("Unknown Error", error.message));
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
