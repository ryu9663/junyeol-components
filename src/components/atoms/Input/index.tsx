import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from "react";
import styles from "./index.module.scss";

export type InputType = "email" | "password" | "search" | "tel" | "text";

type HTMLInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface InputProps extends HTMLInputProps {
  type: InputType;
  validation?: (value: HTMLInputProps["value"]) => string;
}

export const Input = forwardRef(({ type, validation, ...args }: InputProps) => {
  const [text, setText] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  return (
    <>
      <input
        {...args}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          validation && setValidationMessage(validation(e.target.value));
        }}
        type={type}
      />
      <span className={styles["validation-error"]}>{validationMessage}</span>
    </>
  );
});
