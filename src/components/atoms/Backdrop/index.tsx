import { PropsWithChildren } from "react";
import styles from "./index.module.scss";

export type BackdropType = "transparent" | "blur" | "shadow";
export interface BackdropProps extends PropsWithChildren {
  onClose: () => void; // ! ModalProps랑 통일
  type: BackdropType;
  className?: string;
  isOpen: boolean;
}
export const Backdrop = ({
  type,
  onClose,
  children,
  className,
  isOpen,
}: BackdropProps) => {
  return (
    <div
      className={`${styles.backdrop} ${
        isOpen ? styles.opened : styles.closed
      } ${styles[type]} ${styles["priority-1"]} ${className} `}
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
