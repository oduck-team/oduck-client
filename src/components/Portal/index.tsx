import { createPortal } from "react-dom";

import { StrictPropsWithChildren } from "@/types";

interface PortalProps {
  elementId: string;
}

export default function Portal({
  elementId,
  children,
}: StrictPropsWithChildren<PortalProps>) {
  const portal = document.getElementById(elementId);
  return portal && createPortal(children, portal);
}
