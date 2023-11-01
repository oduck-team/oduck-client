import { createContext, useCallback, useMemo, useState } from "react";

import Toast, { ToastProps } from "@/components/Toast";
import { ToastListContainer, ToastWrapper } from "@/components/Toast/style";
import { StrictPropsWithChildren } from "@/types";

interface State {
  toasts: ToastProps[];
  addToast: (toast: Omit<ToastProps, "id" | "onClose">, id: string) => void;
  removeToast: (id: string) => void;
}

export const ToastContext = createContext<State | null>(null);

export function ToastContextProvider({
  children,
  position,
}: StrictPropsWithChildren<Pick<ToastProps, "position">>) {
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
      <ToastWrapper>
        {topToasts && (
          <ToastListContainer position="top">
            {topToasts
              .filter((toast) => toast.position === "top")
              .map((item, i) => (
                <Toast
                  id={item.id}
                  message={item.message}
                  icon={item.icon}
                  closeIcon={item.closeIcon}
                  onClose={item.onClose}
                  buttonText={item.buttonText}
                  onClick={item.onClick}
                  duration={item.duration}
                  position={item.position}
                  key={i}
                />
              ))}
          </ToastListContainer>
        )}
        <ToastListContainer position={position}>
          {bottomToasts.map((item, i) => (
            <Toast
              id={item.id}
              message={item.message}
              icon={item.icon}
              closeIcon={item.closeIcon}
              onClose={item.onClose}
              buttonText={item.buttonText}
              onClick={item.onClick}
              key={i}
            />
          ))}
        </ToastListContainer>
      </ToastWrapper>
    </ToastContext.Provider>
  );
}
