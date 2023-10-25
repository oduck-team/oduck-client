import { LoaderContainer } from "./style";

export interface LoaderProps {
  /**
   * @desc page: (default) 페이지용 Loader
   * @desc oduck: 작은 오덕 이미지만 나타남 (ex. cursor pagination loading)
   */
  display?: "page" | "oduck";
}

export default function Loader({ display = "page" }: LoaderProps) {
  return (
    <LoaderContainer display={display}>
      <img src="/logo/logo.png" alt="로딩중" />
    </LoaderContainer>
  );
}
