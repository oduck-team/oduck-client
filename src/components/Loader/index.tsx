import { LoaderContainer } from "./style";

export interface LoaderProps {
  display?: "page" | "oduck";
}

export default function Loader({ display = "page" }: LoaderProps) {
  return (
    <LoaderContainer display={display}>
      <img src="/logo/logo.png" alt="로딩중" />
    </LoaderContainer>
  );
}
