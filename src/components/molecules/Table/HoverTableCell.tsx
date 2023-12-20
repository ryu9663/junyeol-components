import { PropsWithChildren, useEffect, useRef, useState } from "react";
import styles from "./HoverTableCell.module.scss";
import { useToast } from "@/index";
import nodeToString from "react-node-to-string";
import { Copy } from "react-feather";

export interface HoverTableCellProps extends PropsWithChildren {
  maxWidth: number;
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
    if (beforeHoverDivRef.current) {
      const contentCell = beforeHoverDivRef.current;
      const isElipsissed = contentCell.scrollWidth > contentCell.clientWidth;
      if (isElipsissed) {
        setIsLongText(true);
      }
    }
  }, []);

  const copy = async (text: string) => {
    await navigator.clipboard
      .writeText(text)
      .then(() => {
        toast({
          type: "success",
          children: "내용을 복사했어요.",
          holdTime: 3000,
        });
      })
      .catch(() =>
        toast({
          type: "fail",
          children: "복사를 실패했어요.",
          holdTime: 3000,
        })
      );
  };
  return (
    <>
      {isLongText && isHover ? (
        <div
          onMouseLeave={() => isLongText && setIsHover(false)}
          className={styles["table-cell-hover"]}
        >
          {children}
          {copiable && (
            <button
              data-testid="copybtn-testid"
              onClick={() => copy(nodeToString(children))}
            >
              <Copy />
            </button>
          )}
        </div>
      ) : (
        <div
          ref={beforeHoverDivRef}
          style={{ width: maxWidth }}
          onMouseEnter={() => isLongText && setIsHover(true)}
          className={`${styles["table-cell-ellipsis"]}`}
        >
          {children}
        </div>
      )}
    </>
  );
};
