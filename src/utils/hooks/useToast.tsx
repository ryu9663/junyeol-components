import { ToastOptionType } from "@/components/molecules/ToastContainer";
import { useToastStore } from "@/components/molecules/ToastContainer/index.store";

export const useToast = () => {
  const [toastOption, setToastOption] = useToastStore((state) => [
    state.toastOption,
    state.setToastOption,
  ]);

  return (newToastOption: ToastOptionType) =>
    setToastOption({ ...toastOption, ...newToastOption });
};
