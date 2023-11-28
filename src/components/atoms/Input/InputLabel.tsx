import { DetailedHTMLProps, LabelHTMLAttributes } from "react";

export type HTMLLabelProps = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;
export interface LabelProps extends HTMLLabelProps {}

export const InputLabel = ({ htmlFor, children }: LabelProps) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};
