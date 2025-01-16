import {
  CheckboxContext,
  useCheckboxContext,
} from "@/components/atoms/HeadlessCheckbox/index.store";
import { HTMLInputProps } from "@/components/atoms/Input";
import { HTMLLabelProps } from "@/components/atoms/Label";
import { PropsWithChildren } from "react";

export type HeadlessCheckboxContextProps = {
  id: string;
  isChecked: boolean;
  onChange: () => void;
};

export type HeadlessCheckboxProps =
  PropsWithChildren<HeadlessCheckboxContextProps>;

const HeadlessCheckboxWrapper = ({
  id,
  isChecked,
  onChange,
  children,
}: HeadlessCheckboxProps) => {
  const value = {
    id,
    isChecked,
    onChange,
  };
  return (
    <CheckboxContext.Provider value={value}>
      {children}
    </CheckboxContext.Provider>
  );
};

const Checkbox = ({ ...props }: HTMLInputProps) => {
  const { id, isChecked, onChange } = useCheckboxContext();
  return (
    <input
      type="checkbox"
      id={id}
      checked={isChecked}
      onChange={onChange}
      {...props}
    />
  );
};

const Label = ({ children, ...props }: PropsWithChildren<HTMLLabelProps>) => {
  const { id } = useCheckboxContext();
  return (
    <label htmlFor={id} {...props}>
      {children}
    </label>
  );
};

HeadlessCheckboxWrapper.Checkbox = Checkbox;
HeadlessCheckboxWrapper.Label = Label;

export const HeadlessCheckbox = Object.assign(HeadlessCheckboxWrapper, {
  Checkbox,
  Label,
});
