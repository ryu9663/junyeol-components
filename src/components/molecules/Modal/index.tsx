import { Button } from "@/index";
import { PropsWithChildren } from "react";
import styles from "./index.module.scss";
export interface ModalProps extends PropsWithChildren {
  onClose: () => void;
  onOk: () => void;
  isOpen: boolean;
}
const ModalMain = ({ children, onOk, onClose }: ModalProps) => {
  return (
    <div>
      {children}
      <Modal.Footer onOk={onOk} onClose={onClose} />
    </div>
  );
};

const ModalHeader = ({ children }: PropsWithChildren) => {
  return <header>{children}</header>;
};

const ModalBody = ({ children }: PropsWithChildren) => {
  return <section>{children}</section>;
};

const ModalFooter = ({
  onOk,
  onClose,
}: Pick<ModalProps, "onClose" | "onOk">) => {
  return (
    <footer>
      <Button
        className={styles["modal_footer_confirm-btn"]}
        onClick={onOk}
      ></Button>
      <Button
        className={styles["modal_footer_close-btn"]}
        onClick={onClose}
      ></Button>
    </footer>
  );
};

export const Modal = Object.assign(ModalMain, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
