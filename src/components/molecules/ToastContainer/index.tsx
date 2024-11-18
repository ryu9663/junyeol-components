import {
  CLOSE_TOAST_ANIMATION_DURATION,
  Toast,
  ToastProps,
} from "@/components/atoms/Toast";
import { useToastStore } from "@/components/molecules/ToastContainer/index.store";
import { PropsWithChildren, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useMountedEffect } from "@/utils/hooks/useMountedEffect";

export interface ToastOptionType extends ToastProps {}

export const ToastContainer = ({
  children,
  holdTime = 3000,
}: PropsWithChildren<{ holdTime?: number }>) => {
  const [toastInfos, setToastInfos] = useState<ToastOptionType[]>([]);
  const toastOption = useToastStore((state) => state.toastOption);

  const [isSpaceHolding, setIsSpaceHolding] = useState(false);

  useEffect(() => {
    if (!isSpaceHolding && toastInfos.length > 0) {
      const removeTimer = setTimeout(
        () => setToastInfos([]),
        holdTime + CLOSE_TOAST_ANIMATION_DURATION,
      );

      return () => clearTimeout(removeTimer);
    }
  }, [isSpaceHolding, holdTime, toastInfos]);

  useMountedEffect(() => {
    if (toastOption.children) {
      setToastInfos((prevToastPropss) => [
        ...prevToastPropss,
        { ...toastOption, deleted: false },
      ]);
    }
  }, [toastOption]);

  return (
    <div
      onMouseEnter={() => setIsSpaceHolding(true)}
      onMouseLeave={() => {
        setIsSpaceHolding(false);
      }}
      className={`${styles.toast_wrapper} ${
        styles[toastOption.floatDirection || "from-top"]
      } ${styles["priority-1"]}`}
    >
      {children}
      <div>
        {toastInfos.map((toastInfo, i) => (
          <Toast {...toastInfo} isSpaceHolding={isSpaceHolding} key={i} />
        ))}
      </div>
    </div>
  );
};
