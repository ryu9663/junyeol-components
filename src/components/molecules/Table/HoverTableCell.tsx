import { PropsWithChildren, useEffect, useRef, useState } from "react";
import styles from "./HoverTableCell.module.scss";
import { useToast } from "@/index";
import nodeToString from "react-node-to-string";
import { Copy } from "react-feather";

export interface HoverTableCellProps extends PropsWithChildren {
  maxWidth?: number;
  copiable: boolean;
}
export const HoverTableCell = ({
  children,
  maxWidth,
  copiable,
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

  const copy = async (
    text: string,
    toastMessage?: { success: string; fail?: string }
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
        })
      );
  };

  return (
    <>
      {isHover ? (
        <div
          onMouseLeave={() => {
            if (maxWidth) isLongText && setIsHover(false);
            else setIsHover(false);
          }}
          className={styles["table-cell-hover"]}
        >
          <pre>{children}</pre>
          {copiable && (
            <button
              className={styles.copy_btn}
              data-testid="copybtn-testid"
              onClick={() =>
                copy(nodeToString(children), {
                  success: `${nodeToString(children)}
복사를 성공했습니다.`,
                })
              }
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
            if (maxWidth) isLongText && setIsHover(true);
            else setIsHover(true);
          }}
          className={`${styles["table-cell-ellipsis"]}`}
        >
          {children}
        </div>
      )}
    </>
  );
};
