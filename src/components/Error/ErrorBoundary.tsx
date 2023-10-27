import { AxiosError } from "axios";
import { Component, PropsWithChildren, ReactNode } from "react";

import NotFound from "@/features/common/routes/Error/404";

import Button from "../Button";

import { ErrorMessage, FallbackContainer } from "./ErrorBoundary.style";

interface ErrorBoundaryProps {
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  error: AxiosError | null;
  hasError: boolean;
  errorMessage: string | null;
}

export default class ErrorBoundary extends Component<
  PropsWithChildren<ErrorBoundaryProps>,
  ErrorBoundaryState
> {
  constructor(props: PropsWithChildren<ErrorBoundaryProps>) {
    super(props);
    this.state = {
      error: null,
      hasError: false,
      errorMessage: null,
    };
  }

  static getDerivedStateFromError(error: AxiosError): ErrorBoundaryState {
    return { error, hasError: true, errorMessage: error.message };
  }

  // TODO: Sentry로 에러 로그 보내기
  // componentDidCatch(error: Error) {

  // }

  render() {
    const { error, hasError } = this.state;
    const { fallback, children } = this.props;
    // console.log(error);

    if (hasError) {
      if (fallback) return fallback;
      if (error?.response?.status === 404) return <NotFound />;
      return <DefaultFallback />;
    }

    return children;
  }
}

function DefaultFallback() {
  return (
    <FallbackContainer>
      <h1>잠시 후 다시 시도해주세요</h1>

      <ErrorMessage>
        오류가 계속 발생할 경우 <br />
        다음 이메일로 연락해 주세요.
        <div>
          <a
            href="mailto:admin@oduck.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            admin@oduck.io
          </a>
        </div>
      </ErrorMessage>

      <Button
        name="다시 시도"
        size="lg"
        color="neutral"
        onClick={() => window.location.reload()}
      >
        다시 시도
      </Button>
    </FallbackContainer>
  );
}
