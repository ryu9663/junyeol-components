import { ToastOptionType } from "@/components/molecules/ToastProvider";
import { useToastStore } from "@/components/molecules/ToastProvider/index.store";

export const useToast = () => {
  const [toastOption, setToastOption] = useToastStore((state) => [
    state.toastOption,
    state.setToastOption,
  ]);

  return (newToastOption: ToastOptionType) =>
    setToastOption({ ...toastOption, ...newToastOption });
};
