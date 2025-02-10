import {
  CSSProperties,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./HoverTableCell.module.scss";
import { useToast } from "@/index";
import nodeToString from "react-node-to-string";
import { Copy } from "react-feather";
import { CopyMessageType } from "@/components/molecules/Table/TableCell";

export interface HoverTableCellProps extends PropsWithChildren {
  maxWidth?: CSSProperties["maxWidth"];
  copyMessage?: CopyMessageType;
}

export const HoverTableCell = ({
  children,
  maxWidth,
  copyMessage,
}: HoverTableCellProps) => {
  const toast = useToast();
  const [isHover, setIsHover] = useState(false);
  const [isLongText, setIsLongText] = useState(false);
  const beforeHoverDivRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (maxWidth && beforeHoverDivRef.current) {
      const contentCell = beforeHoverDivRef.current;
      const isElipsissed = contentCell.scrollWidth > contentCell.clientWidth;
      if (isElipsissed) {
        setIsLongText(true);
      }
    }
  }, [maxWidth]);

  const handleCopy = async (
    text: string,
    toastMessage?: { success: string; fail?: string },
  ) => {
    await navigator.clipboard
      .writeText(text)
      .then(() => {
        toast({
          type: "success",
          children: toastMessage?.success || "복사했습니다.",
          holdTime: 3000,
        });
      })
      .catch(() =>
        toast({
          type: "fail",
          children: toastMessage?.fail || "복사에 실패했습니다.",
          holdTime: 3000,
        }),
      );
  };

  return (
    <>
      {isHover ? (
        <div
          onMouseLeave={() => {
            if (copyMessage) {
              setIsHover(false);
            }
            if (maxWidth) {
              isLongText && setIsHover(false);
            }
          }}
          className={styles["table-cell-hover"]}
        >
          <pre>{children}</pre>
          {copyMessage && (
            <button
              className={styles.copy_btn}
              data-testid="copybtn-testid"
              onClick={() => handleCopy(nodeToString(children), copyMessage)}
            >
              <Copy width={20} height={20} />
            </button>
          )}
        </div>
      ) : (
        <div
          ref={beforeHoverDivRef}
          style={{ width: maxWidth }}
          onMouseEnter={() => {
            if (copyMessage) {
              setIsHover(true);
            }
            if (maxWidth) {
              isLongText && setIsHover(true);
            }
          }}
          className={`${styles["table-cell-ellipsis"]}`}
        >
          {children}
        </div>
      )}
    </>
  );
};
