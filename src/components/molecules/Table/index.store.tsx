import { CSSProperties } from "react";
import { create } from "zustand";

export type MaxWidth = CSSProperties["maxWidth"];

interface TableStoreType {
  maxIndex?: MaxWidth;
}
export const useToastStore = create<TableStoreType>((set) => ({
  toastOption: {
    type: "success",
    children: "",
    isSpaceHolding: false,
    floatDirection: "from-top",
    holdTime: 3000,
    className: "",
  },
  setToastOption: (toastOption: ToastOptionType) => set({ toastOption }),
}));
