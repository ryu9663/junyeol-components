import type { ReactNode } from "react";
import type { ToastOptionType } from ".";
import { useToastStore } from "./index.store";

export const toast = {
  show: (toastOption: ToastOptionType) =>
    useToastStore.getState().setToastOption(toastOption),
  success: (message: string | ReactNode) =>
    useToastStore.getState().setToastOption({
      type: "success",
      children: message,
    }),
  error: (message: string | ReactNode) =>
    useToastStore.getState().setToastOption({
      type: "fail",
      children: message,
    }),
};
