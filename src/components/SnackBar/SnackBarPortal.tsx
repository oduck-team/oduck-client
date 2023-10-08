import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { PortalID } from "@/contexts/SnackBarContext";

import { SnackBar as SnackBarItem } from "./snackBarReducer";

import SnackBar, { SnackbarPublicProps } from ".";

export interface SnackBarPortalProps extends SnackbarPublicProps {
  portalId?: PortalID;
  onCloseSnackBar?: (id: string) => void;
  zIndex?: string | number;
  snackBars?: SnackBarItem[];
}

export default function SnackBarPortal({
  portalId = "snackBar-portal",
  onCloseSnackBar,
  zIndex,
  position = "bottom",
  snackBars = [],
  ...snackBarGlobalOptions
}: SnackBarPortalProps) {
  const [loaded, setLoaded] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const div = document.createElement("div");
    div.setAttribute("role", "log");
    div.style.zIndex = zIndex
      ? zIndex.toString()
      : theme.zIndex.modal.toString();
    div.id = portalId;
    div.style.position = "fixed";
    div.style.backgroundColor = "#DFEVDV";
    div.style.left = "50%";
    div.style.transform = "translateX(-50%)";

    if (position === "top") {
      div.style.top = "74px";
    }

    if (position === "bottom") {
      div.style.bottom = "74px";
    }
    document.getElementsByTagName("body")[0].prepend(div);

    setLoaded(true);

    return () => {
      document.getElementsByTagName("body")[0].removeChild(div);
    };
  }, [portalId, position, theme.zIndex.modal, zIndex]);

  if (!(loaded && snackBars && snackBars.length > 0)) {
    return null;
  }

  const orderByCreatedAt = snackBars.reverse();

  return createPortal(
    <>
      {orderByCreatedAt.map((snackBarLocalOptions) => (
        <SnackBar
          key={snackBarLocalOptions.id}
          onClose={onCloseSnackBar}
          {...snackBarGlobalOptions}
          {...snackBarLocalOptions}
        />
      ))}
    </>,
    document.getElementById(portalId) as HTMLElement,
  );
}
