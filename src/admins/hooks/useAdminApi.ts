import { useContext } from "react";

import { AdminApiContext } from "../contexts/AdminApiContext";

export default function useAdminApi() {
  const context = useContext(AdminApiContext);
  if (!context)
    throw new Error("useAdminApi must be used within a AdminApiContext");

  return context;
}
