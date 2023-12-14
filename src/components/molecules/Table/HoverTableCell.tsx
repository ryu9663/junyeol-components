import { PropsWithChildren, useEffect, useRef, useState } from "react";
import styles from "./HoverTableCell.module.scss";

export interface HoverTableCellProps extends PropsWithChildren {
  maxWidth: number;
}
export const HoverTableCell = ({ children, maxWidth }: HoverTableCellProps) => {
  const [isHover, setIsHover] = useState(false);
  const [isTextTooShort, setIsTextTooShort] = useState(false);
  const beforeHoverDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (beforeHoverDivRef.current) {
      const contentCell = beforeHoverDivRef.current;
      const isNotElipsissed = contentCell.scrollWidth > contentCell.clientWidth;

      if (isNotElipsissed) {
        setIsTextTooShort(true);
      }
    }
  }, []);

  return (
    <>
      {isTextTooShort && isHover ? (
        <div
          onMouseLeave={() => isTextTooShort && setIsHover(false)}
          className={styles["table-cell-hover"]}
        >
          {children}
        </div>
      ) : (
        <div
          ref={beforeHoverDivRef}
          style={{ width: maxWidth }}
          onMouseEnter={() => isTextTooShort && setIsHover(true)}
          className={`${styles["table-cell-ellipsis"]}`}
        >
          {children}
        </div>
      )}
    </>
  );
};
