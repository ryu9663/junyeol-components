import { PropsWithChildren } from "react";
import styles from "./index.module.scss";

type BackdropType = "transparent" | "blur" | "shadow";
interface BackdropProps extends PropsWithChildren {
  onClose: () => void; // ! ModalProps랑 통일
  type: BackdropType;
}
export const Backdrop = ({ type, onClose, children }: BackdropProps) => {
  return (
    <div
      className={`${styles.backdrop} ${styles[type]}`}
      onClick={onClose}
      data-testid="backdrop-testid"
    >
      {children}
    </div>
  );
};
