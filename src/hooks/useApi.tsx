import { useContext } from "react";

import { OduckApiContext } from "@/contexts/OduckApiContext";

export function useApi() {
  const context = useContext(OduckApiContext);
  if (!context)
    throw new Error("useApi must be used within a OduckApiProvider");

  return context;
}
