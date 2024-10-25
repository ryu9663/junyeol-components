import { cleanClassName } from "@/utils";
import styles from "./index.module.scss";
interface PickerFooterProps {
  onOk?: () => void;
  onCancel?: () => void;
}
export const PickerFooter = ({ onOk, onCancel }: PickerFooterProps) => {
  return (
    <div
      className={cleanClassName(
        `${styles.picker_footer_wrapper} ${styles["font-size-small"]}`,
      )}
    >
      <button onClick={onOk}>확인</button>
      <button onClick={onCancel}>취소</button>
    </div>
  );
};
