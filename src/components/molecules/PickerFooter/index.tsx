import { Button } from "@/components/atoms";
import styles from "./index.module.scss";
interface PickerFooterProps {
  onOk?: () => void;
  onCancel?: () => void;
}
export const PickerFooter = ({ onOk, onCancel }: PickerFooterProps) => {
  return (
    <div className={styles.picker_footer_wrapper}>
      <Button size="small" onClick={onCancel}>
        취소
      </Button>
      <Button size="small" onClick={onOk}>
        확인
      </Button>
    </div>
  );
};
