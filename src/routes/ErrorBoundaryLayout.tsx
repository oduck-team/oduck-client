import { Outlet } from "react-router-dom";

import ErrorBoundary from "@/components/Error/ErrorBoundary";

export default function ErrorBoundaryLayout() {
  return (
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  );
}
