import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from "react";
import styles from "./index.module.scss";
import { Label } from "@/components/atoms/Label";

export type InputType =
  | "email"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "number";

export type HTMLInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
export interface LabelOptionType {
  htmlFor: string;
  name: string;
  className?: string;
}

export interface InputProps extends HTMLInputProps {
  type: InputType;
  validation?: (value: HTMLInputProps["value"]) => string;
  label?: LabelOptionType;
}

export const Input = forwardRef(
  ({
    type,
    validation,
    value,
    onChange,
    className,
    label,
    ref,
    ...args
  }: InputProps) => {
    const [validationMessage, setValidationMessage] = useState("");

    return (
      <div>
        {label && (
          <Label
            htmlFor={label.htmlFor}
            className={label.className}
            isError={!!validationMessage}
          >
            {label.name}
          </Label>
        )}
        <input
          {...args}
          ref={ref}
          id={label && label.htmlFor}
          className={`${className} ${styles.input} ${
            validationMessage && styles["error-border"]
          }`}
          value={value}
          onChange={(e) => {
            let isError: boolean | undefined;
            if (validation) {
              isError = !!validation(e.target.value);
              setValidationMessage(validation(e.target.value));
            }
            if (!isError) {
              onChange?.(e);
            }
          }}
          type={type}
        />
        {
          <span className={styles["validation-error"]}>
            {validationMessage}
          </span>
        }
      </div>
    );
  }
);
