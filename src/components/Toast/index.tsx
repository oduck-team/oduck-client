import { X } from "@phosphor-icons/react";
import { useCallback, useEffect } from "react";

import Button from "../Button";

import { ToastContainer, Left, Divider, Content, Right } from "./style";

export type ToastPosition = "top" | "bottom";

export interface ToastProps {
  id: string;
  message: string;
  icon?: React.ReactNode;
  closeIcon?: boolean;
  onClose: () => void;
  onClick?: (e: React.MouseEvent) => void;
  buttonText?: string;
  position?: ToastPosition;
  duration?: number;
}

export default function Toast({
  id,
  message,
  icon,
  closeIcon = false,
  onClose,
  onClick,
  buttonText,
  position = "bottom",
  duration = 2,
}: ToastProps) {
  const closeToast = useCallback(onClose, [onClose]);

  useEffect(() => {
    setTimeout(() => {
      closeToast();
    }, duration * 1000);
  }, [duration, closeToast]);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
    onClose();
  };

  return (
    <ToastContainer id={id} hasButton={Boolean(onClick)} position={position}>
      <Content>
        <Left>
          {icon && icon}
          <span>{message}</span>
        </Left>
        {closeIcon && (
          <Right>
            <Divider />
            <Button
              icon={<X />}
              name="closeToast"
              variant="text"
              color="neutral"
              onClick={onClose}
            />
          </Right>
        )}
      </Content>
      {onClick && (
        <Button name="button" onClick={handleButtonClick}>
          {buttonText}
        </Button>
      )}
    </ToastContainer>
  );
}
