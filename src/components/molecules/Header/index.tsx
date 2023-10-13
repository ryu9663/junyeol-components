import styles from "./index.module.scss";
import { Children, PropsWithChildren } from "react";

export const Header = ({ children }: PropsWithChildren) => {
  const childrenArray = Children.toArray(children);
  const firstChild = childrenArray[0];
  const otherChildren = childrenArray.slice(1);
  return (
    <header className={`${styles.header} ${styles["priority-1"]}`}>
      <ul className={styles["header_button-list"]}>
        <li className={styles["header_logo"]}>{firstChild}</li>
        <div className={styles["header_right-section"]}>
          {otherChildren.map((child, index) => (
            <li key={index}>{child}</li>
          ))}
        </div>
      </ul>
    </header>
  );
};
