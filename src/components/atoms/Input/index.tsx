import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from "react";
import styles from "./index.module.scss";
import { Label } from "@/components/atoms/Label";
import { FontSizeType, FontWeightType } from "@/utils/constants";

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

/*** validation : validation={(value) =>
            String(value).length > 5 ? "5글자 이하로 입력해주세요" : ""
          } */
export interface InputPropsWithoutRef extends HTMLInputProps {
  type?: InputType;
  validation?: (value: HTMLInputProps["value"]) => string;
  label?: LabelOptionType;
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
}

export type InputProps = Omit<InputPropsWithoutRef, "ref"> &
  React.RefAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputPropsWithoutRef>(
  (
    {
      type,
      validation,
      value,
      onChange,
      className,
      label,
      fontSize = "small",
      fontWeight = 400,
      ...args
    }: InputPropsWithoutRef,
    ref,
  ) => {
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
          className={`${styles.input} ${
            validationMessage && styles["error-border"]
          } ${styles[`font-size-${fontSize}`]}
          ${styles[`font-weight-${fontWeight}`]}
          ${className} `}
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
        {validationMessage && (
          <span className={styles["validation-error"]}>
            {validationMessage}
          </span>
        )}
      </div>
    );
  },
);
