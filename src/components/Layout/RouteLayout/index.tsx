import { Outlet } from "react-router-dom";

import ErrorBoundary from "@/components/Error/ErrorBoundary";

import SavePath from "./SavePath";

export default function RouteLayout() {
  return (
    <>
      <ErrorBoundary>
        <SavePath />
        <Outlet />
      </ErrorBoundary>
    </>
  );
}
