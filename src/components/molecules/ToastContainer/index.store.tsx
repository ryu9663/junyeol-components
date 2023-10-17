import { ToastOptionType } from "@/components/molecules/ToastContainer";
import { create } from "zustand";

interface ToastProviderProps {
  toastOption: ToastOptionType;
  setToastOption: (toastOption: ToastOptionType) => void;
}
export const useToastStore = create<ToastProviderProps>((set) => ({
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
