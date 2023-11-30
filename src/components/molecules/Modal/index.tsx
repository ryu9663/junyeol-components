import { Button } from "@/index";
import { PropsWithChildren } from "react";
import styles from "./index.module.scss";
export interface ModalProps extends PropsWithChildren {
  onClose: () => void;
  onOk: () => void;
  isOpen: boolean;
  okBtn?: string;
  closeBtn?: string;
}
const ModalMain = ({
  children,
  onOk,
  onClose,
  okBtn = "확인",
  closeBtn = "취소",
}: ModalProps) => {
  return (
    <div>
      {children}
      <Modal.Footer
        onOk={onOk}
        onClose={onClose}
        okBtn={okBtn}
        closeBtn={closeBtn}
      />
    </div>
  );
};

const ModalHeader = ({ children }: PropsWithChildren) => {
  return <header>{children}</header>;
};

const ModalBody = ({ children }: PropsWithChildren) => {
  return <section>{children}</section>;
};

export interface ModalFooterProps extends Pick<ModalProps, "onClose" | "onOk"> {
  okBtn?: string;
  closeBtn?: string;
}
const ModalFooter = ({ onOk, onClose, okBtn, closeBtn }: ModalFooterProps) => {
  return (
    <footer>
      <Button className={styles["modal_footer_confirm-btn"]} onClick={onOk}>
        {okBtn}
      </Button>
      <Button className={styles["modal_footer_close-btn"]} onClick={onClose}>
        {closeBtn}
      </Button>
    </footer>
  );
};

export const Modal = Object.assign(ModalMain, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
