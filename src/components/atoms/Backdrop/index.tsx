import { PropsWithChildren } from "react";
import styles from "./index.module.scss";

export type BackdropType = "transparent" | "blur" | "shadow";
export interface BackdropProps extends PropsWithChildren {
  onClose: () => void; // ! ModalProps랑 통일
  type: BackdropType;
  className?: string;
}
export const Backdrop = ({
  type,
  onClose,
  children,
  className,
}: BackdropProps) => {
  console.log("k");
  return (
    <div
      className={`${styles.backdrop} ${styles[type]} ${styles["priority-1"]} ${className} `}
      onClick={onClose}
      data-testid="backdrop-testid"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles["stop-bubbling"]}`}
      >
        {children}
      </div>
    </div>
  );
};
