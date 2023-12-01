import { Button } from "@/index";
import { PropsWithChildren, createContext, useContext } from "react";
import styles from "./index.module.scss";
import { Backdrop, BackdropProps } from "@/components/atoms/Backdrop";
import { X } from "react-feather";

export type ModalSize = "small" | "medium" | "large";
export interface ModalProps extends PropsWithChildren {
  onClose: () => void;
  onOk: () => void;
  isOpen: boolean;
  okBtn?: string;
  closeBtn?: string;
  backdropType?: BackdropProps["type"];
  size?: ModalSize;
}

const ModalContext = createContext<{ onClose: () => void; size: ModalSize }>({
  onClose: () => {},
  size: "medium",
});

const ModalMain = ({
  children,
  onOk,
  onClose,
  isOpen,
  okBtn = "확인",
  closeBtn = "취소",
  backdropType = "blur",
  size = "medium",
}: ModalProps) => {
  return (
    <>
      <Backdrop isOpen={isOpen} onClose={onClose} type={backdropType}>
        <section
          role="dialog"
          className={`${styles.modal} ${styles["priority-1"]} ${styles[size]}`}
        >
          <ModalContext.Provider value={{ onClose, size }}>
            {children}
          </ModalContext.Provider>
          <Modal.Footer
            onOk={onOk}
            onClose={onClose}
            okBtn={okBtn}
            closeBtn={closeBtn}
          />
        </section>
      </Backdrop>
    </>
  );
};

const ModalHeader = ({ children }: PropsWithChildren) => {
  const { size, onClose } = useContext(ModalContext);

  return (
    <>
      <div className={`${styles.modal_header} ${styles[size]}`}>
        {children}
        <Button data-testid="modal-close-btn" className="" onClick={onClose}>
          <X width={24} height={24} />
        </Button>
      </div>
    </>
  );
};

const ModalBody = ({ children }: PropsWithChildren) => {
  const { size } = useContext(ModalContext);

  return (
    <div className={`${styles.modal_body} ${styles[size]}`}>{children}</div>
  );
};

export interface ModalFooterProps extends Pick<ModalProps, "onClose" | "onOk"> {
  okBtn?: string;
  closeBtn?: string;
}

const ModalFooter = ({ onOk, onClose, okBtn, closeBtn }: ModalFooterProps) => {
  return (
    <>
      <div className={styles.modal_footer}>
        <Button onClick={onOk}>{okBtn}</Button>
        <Button onClick={onClose}>{closeBtn}</Button>
      </div>
    </>
  );
};

export const Modal = Object.assign(ModalMain, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
