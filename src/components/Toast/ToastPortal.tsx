import { createPortal } from "react-dom";

import { ToastListContainer, ToastPortalContainer } from "./style";

import Toast, { ToastProps } from ".";

interface ToastPortalProps {
  topToasts: ToastProps[];
  bottomToasts: ToastProps[];
}

export default function ToastPortal({
  topToasts,
  bottomToasts,
}: ToastPortalProps) {
  return createPortal(
    <ToastPortalContainer id="toast-portal">
      {topToasts.length !== 0 && (
        <ToastListContainer position="top">
          {topToasts
            .filter((toast) => toast.position === "top")
            .map((item) => (
              <Toast
                id={item.id}
                message={item.message}
                icon={item.icon}
                iconColor={item.iconColor}
                closeButton={item.closeButton}
                onClose={item.onClose}
                buttonText={item.buttonText}
                onClickButton={item.onClickButton}
                duration={item.duration}
                position={item.position}
                key={item.id}
              />
            ))}
        </ToastListContainer>
      )}
      {bottomToasts.length !== 0 && (
        <ToastListContainer position="bottom">
          {bottomToasts.map((item) => (
            <Toast
              id={item.id}
              message={item.message}
              icon={item.icon}
              iconColor={item.iconColor}
              closeButton={item.closeButton}
              onClose={item.onClose}
              buttonText={item.buttonText}
              onClickButton={item.onClickButton}
              duration={item.duration}
              key={item.id}
            />
          ))}
        </ToastListContainer>
      )}
    </ToastPortalContainer>,
    document.body,
  );
}
