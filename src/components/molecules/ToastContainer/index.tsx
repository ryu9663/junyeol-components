import { Toast, ToastProps } from "@/components/atoms/Toast";
import { useToastStore } from "@/components/molecules/ToastContainer/index.store";
import { PropsWithChildren, useState } from "react";
import styles from "./index.module.scss";
import { useMountedEffect } from "@/utils/hooks/useMountedEffect";

export interface ToastOptionType extends ToastProps {}

export const ToastContainer = ({ children }: PropsWithChildren) => {
  const [toastInfos, setToastInfos] = useState<ToastOptionType[]>([]);
  const toastOption = useToastStore((state) => state.toastOption);

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
      {children}
      <div>
        {toastInfos.map((toastInfo, i) => (
          <Toast {...toastInfo} key={i} />
        ))}
      </div>
    </div>
  );
};
