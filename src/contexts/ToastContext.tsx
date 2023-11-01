import { createContext, useCallback, useMemo, useState } from "react";

import { ToastProps } from "@/components/Toast";
import ToastPortal from "@/components/Toast/ToastPortal";
import { StrictPropsWithChildren } from "@/types";

interface State {
  toasts: ToastProps[];
  addToast: (toast: Omit<ToastProps, "id" | "onClose">, id: string) => void;
  removeToast: (id: string) => void;
}

export const ToastContext = createContext<State | null>(null);

export function ToastContextProvider({ children }: StrictPropsWithChildren) {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  // 상단에 위치할 toasts
  const topToasts = useMemo(() => {
    return toasts.filter((toast) => toast.position === "top");
  }, [toasts]);

  // 하단에 위치할 toasts
  const bottomToasts = useMemo(() => {
    return toasts.filter((toast) => toast.position !== "top");
  }, [toasts]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback(
    (toast: Omit<ToastProps, "id" | "onClose">, id: string) => {
      setToasts((prev) => [
        ...prev,
        { ...toast, id, onClose: () => removeToast(id) },
      ]);
    },
    [removeToast],
  );

  const value = useMemo(
    () => ({ toasts, addToast, removeToast }),
    [addToast, toasts, removeToast],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastPortal topToasts={topToasts} bottomToasts={bottomToasts} />
    </ToastContext.Provider>
  );
}
