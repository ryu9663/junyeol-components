import { useEffect, useState } from "react";

import styles from "./index.module.scss";
import CircleCheck from "@/assets/circle-check.svg";
import CircleExclamation from "@/assets/circle-exclamation.svg";
import { cleanClassName } from "@/utils";

export interface ToastProps {
  type?: "success" | "fail";
  children?: React.ReactNode;
  isSpaceHolding?: boolean;
  floatDirection?: "from-top" | "from-bottom";
  holdTime?: number;
  className?: string;
}

type ToastState =
  | "opening"
  | "opened"
  | "holding"
  | "closing"
  | "closed"
  | "deleted";

export const CLOSE_TOAST_ANIMATION_DURATION = 500;

export const Toast = ({
  type = "success",
  children,
  isSpaceHolding = false,
  floatDirection = "from-top",
  holdTime = 3000,
  className,
}: ToastProps) => {
  const [toastState, setToastState] = useState<ToastState>("opening");

  useEffect(() => {
    switch (toastState) {
      case "opening":
        setTimeout(() => setToastState("opened"));
        break;

      case "opened": {
        const holdTimer = setTimeout(
          () => setToastState(isSpaceHolding ? "holding" : "closing"),
          isSpaceHolding ? 500 : holdTime,
        );
        return () => clearTimeout(holdTimer);
      }

      case "closing": {
        const closeTimer = setTimeout(
          () => setToastState("closed"),
          CLOSE_TOAST_ANIMATION_DURATION,
        );
        return () => clearTimeout(closeTimer);
      }
      default:
    }
  }, [toastState, isSpaceHolding, holdTime]);

  useEffect(() => {
    if (toastState === "holding" && !isSpaceHolding) {
      setToastState("closed");
      return;
    }
    if (toastState === "closed" && !isSpaceHolding) {
      const removeTimer = setTimeout(() => setToastState("deleted"), 500);
      return () => clearTimeout(removeTimer);
    }
  }, [isSpaceHolding, toastState]);

  const hasSpace =
    ["opened", "holding"].includes(toastState) ||
    (["closing", "closed"].includes(toastState) && isSpaceHolding);

  return toastState === "deleted" ? (
    <></>
  ) : (
    <div
      className={cleanClassName(
        `${styles["toast-wrap"]} ${
          hasSpace && styles["has-space"]
        } ${className}`,
      )}
    >
      <div
        className={cleanClassName(
          `${styles.toast} ${styles[`float-direction-${floatDirection}`]} ${
            {
              opening: styles.opening,
              opened: styles.opened,
              holding: styles.holding,
              closing: styles.closing,
              closed: styles.closed,
            }[toastState]
          }`,
        )}
      >
        <img
          src={
            {
              success: CircleCheck,
              fail: CircleExclamation,
            }[type]
          }
          className={styles.icon}
          alt="mark"
        />
        <div className={styles["toast-contents-wrap"]}>{children}</div>
      </div>
    </div>
  );
};
