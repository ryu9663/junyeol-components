import { PropsWithChildren, useEffect, useRef, useState } from "react";
import styles from "./HoverTableCell.module.scss";

export interface HoverTableCellProps extends PropsWithChildren {
  maxWidth: number;
}
export const HoverTableCell = ({ children, maxWidth }: HoverTableCellProps) => {
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

  return (
    <>
      {isLongText && isHover ? (
        <div
          onMouseLeave={() => isLongText && setIsHover(false)}
          className={styles["table-cell-hover"]}
        >
          {children}
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
