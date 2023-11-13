declare interface BaseTimeEntity {
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
}

/**
 * 커서 페이지의 응답 스키마입니다
 * 제네릭을 사용하여 items T를 지정합니다
 * @example
 * CursorPage<SomeType>
 */
declare interface CursorPage<T> {
  items: T[];
  size: number;
  hasNext: boolean;
  cursor: string;
}

/**
 * 일반 페이지의 응답 스키마입니다
 * 제네릭을 사용하여 items T를 지정합니다
 * @example
 * Page<SomeType>
 */
declare interface Page<T> {
  items: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
