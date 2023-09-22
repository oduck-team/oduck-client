import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { StrictPropsWithChildren } from "@/types";

interface PortalProps {
  elementId?: string;
}

export default function Portal({
  children,
}: StrictPropsWithChildren<PortalProps>) {
  const [container, setContainer] = useState<Element | null>(null);

  useEffect(() => {
    if (document) {
      setContainer(document.body);
    }
  }, [container]);

  if (!container) return null;

  return createPortal(children, container);
}
