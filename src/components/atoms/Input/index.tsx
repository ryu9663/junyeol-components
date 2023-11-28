import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from "react";
import styles from "./index.module.scss";
import { InputLabel } from "@/components/atoms/Input/InputLabel";

export type InputType = "email" | "password" | "search" | "tel" | "text";

type HTMLInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface InputProps extends HTMLInputProps {
  type: InputType;
  validation?: (value: HTMLInputProps["value"]) => string;
}

const InputMain = forwardRef(({ type, validation, ...args }: InputProps) => {
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

export const Input = Object.assign(InputMain, {
  Label: InputLabel,
});
