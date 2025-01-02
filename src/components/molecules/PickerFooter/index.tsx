import { cleanClassName } from "@/utils";
import styles from "./index.module.scss";
import { Button } from "@/components/atoms";
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
      <Button type="button" fontSize="small" size="small" onClick={onOk}>
        확인
      </Button>
      <Button type="button" fontSize="small" size="small" onClick={onCancel}>
        취소
      </Button>
    </div>
  );
};
