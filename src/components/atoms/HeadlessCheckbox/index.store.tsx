import { HeadlessCheckboxProps } from "@/components/atoms/HeadlessCheckbox";
import { createContext, useContext } from "react";

export const useCheckboxContext = () => {
  const context = useContext(CheckboxContext);
  return context;
};

export const CheckboxContext = createContext<HeadlessCheckboxProps>({
  id: "",
  isChecked: false,
  onChange: () => {},
});
