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
        const holdTimer = setTimeout(() => setToastState("closing"), holdTime);
        return () => clearTimeout(holdTimer);
      }

      case "closing": {
        if (!isSpaceHolding) {
          const closeTimer = setTimeout(
            () => setToastState("closed"),
            CLOSE_TOAST_ANIMATION_DURATION,
          );
          return () => clearTimeout(closeTimer);
        } else {
          setToastState("opened");
          return;
        }
      }
      default:
    }
  }, [toastState, holdTime]);

  useEffect(() => {
    if (toastState === "closed" && !isSpaceHolding) {
      setToastState("deleted");
    }
  }, [isSpaceHolding, toastState]);

  const isToastHoldable = ["opened", "holding", "closing"].includes(toastState);

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
        onMouseEnter={() => {
          if (isToastHoldable) {
            setToastState("holding");
          }
        }}
        onMouseLeave={() => {
          if (isToastHoldable) {
            setToastState("opened");
          }
        }}
        className={cleanClassName(
          `${styles.toast} ${styles[`float-direction-${floatDirection}`]} ${
            {
              opening: styles.invisible,
              opened: styles.opened,
              holding: styles.opened,
              closing: styles.closing,
              closed: styles.invisible,
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
