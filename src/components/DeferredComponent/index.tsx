import { useEffect, useState } from "react";

import { StrictPropsWithChildren } from "@/types";

/**
 * children 컴포넌트를 지연시켜 렌더링합니다
 */
export default function DeferredComponent({
  children,
}: StrictPropsWithChildren) {
  const [isDeferred, setIsDeferred] = useState(false);

  useEffect(() => {
    // 200ms 지난 후 children Render
    const timeout = setTimeout(() => {
      setIsDeferred(true);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  if (!isDeferred) {
    return null;
  }

  return <>{children}</>;
}
