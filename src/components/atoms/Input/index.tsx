import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from "react";
import styles from "./index.module.scss";
import { InputLabel } from "@/components/atoms/Input/InputLabel";

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
    ...args
  }: InputProps) => {
    const [validationMessage, setValidationMessage] = useState("");

    return (
      <div>
        {label && (
          <InputLabel
            htmlFor={label.htmlFor}
            className={label.className}
            isError={!!validationMessage}
          >
            {label.name}
          </InputLabel>
        )}
        <input
          {...args}
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
              // return;
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
