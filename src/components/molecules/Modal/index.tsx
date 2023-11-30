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

const ModalContext = createContext<(() => void) | undefined>(undefined);

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
      {isOpen && (
        <Backdrop onClose={onClose} type={backdropType}>
          <section
            role="dialog"
            className={`${styles.modal} ${styles["priority-1"]} ${styles[size]}`}
          >
            <ModalContext.Provider value={onClose}>
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
      )}
    </>
  );
};

const ModalHeader = ({ children }: PropsWithChildren) => {
  const handleClose = useContext(ModalContext);

  return (
    <>
      <div className={styles.modal_header}>
        {children}
        <Button
          data-testid="modal-close-btn"
          className=""
          onClick={handleClose}
        >
          <X width={24} height={24} />
        </Button>
      </div>
    </>
  );
};

const ModalBody = ({ children }: PropsWithChildren) => {
  return <div className={styles.modal_body}>{children}</div>;
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
