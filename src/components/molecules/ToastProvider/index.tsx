import { Toast, ToastProps } from "@/components/atoms/Toast";
import { useToastStore } from "@/components/molecules/ToastProvider/index.store";
import { useState } from "react";
import styles from "./index.module.scss";
import { useMountedEffect } from "@/utils/hooks/useMountedEffect";

export interface ToastOptionType extends ToastProps {}

export const ToastProvider = () => {
  const [toastInfos, setToastInfos] = useState<ToastOptionType[]>([]);
  const [toastOption] = useToastStore((state) => [
    state.toastOption,
    state.setToastOption,
  ]);

  useMountedEffect(() => {
    setToastInfos((prevToastPropss) => [
      ...prevToastPropss,
      { ...toastOption, deleted: false },
    ]);
  }, [toastOption]);

  return (
    <div
      className={`${styles.toast_wrapper} ${
        styles[toastOption.floatDirection || "from-top"]
      } ${styles["priority-1"]}`}
    >
      <div>
        {toastInfos.map((toastInfo, i) => (
          <Toast {...toastInfo} key={i} />
        ))}
      </div>
    </div>
  );
};
