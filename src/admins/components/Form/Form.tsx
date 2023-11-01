import { ComponentProps, PropsWithChildren } from "react";

import classes from "./Form.module.css";

interface FormProps extends ComponentProps<"form"> {}

/** @description Form UI 컴포넌트 */
export default function Form({
  children,
  ...props
}: PropsWithChildren<FormProps>) {
  return (
    <form className={classes.form} {...props}>
      {children}
    </form>
  );
}
