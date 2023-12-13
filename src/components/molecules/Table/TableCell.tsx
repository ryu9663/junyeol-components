import {
  CSSProperties,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./index.module.scss";
import { cleanClassName } from "@/utils";
import { isString } from "@/utils/public/is";
export interface TableCellProps extends PropsWithChildren {
  className?: string;
  maxWidth?: CSSProperties["maxWidth"];
}
export const TableCell = ({
  children,
  className,
  maxWidth,
}: TableCellProps) => {
  const classes = `${className} ${maxWidth ? "max-w-" + maxWidth : ""} `;

  return (
    <td className={`${cleanClassName(classes)} `}>
      {maxWidth ? (
        <LongTextCell
          maxWidth={isString(maxWidth) ? parseInt(maxWidth, 10) : maxWidth}
        >
          {children}
        </LongTextCell>
      ) : (
        <div>{children}</div>
      )}
    </td>
  );
};

interface LongTextCellProps extends PropsWithChildren {
  maxWidth: number;
}
const LongTextCell = ({ children, maxWidth }: LongTextCellProps) => {
  const [isHover, setIsHover] = useState(false);
  const [isTextTooShort, setIsTextTooShort] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      const contentCell = divRef.current;
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
          className={styles["long-text"]}
          data-testid="j"
        >
          {children}
        </div>
      ) : (
        <div
          ref={divRef}
          data-testid="j2"
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
