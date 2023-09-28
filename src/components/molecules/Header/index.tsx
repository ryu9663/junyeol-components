import styles from "./index.module.scss";
import { PropsWithChildren } from "react";

export const Header = ({ children }: PropsWithChildren) => {
  return (
    <header className={styles.header}>
      <ul className={styles["header_button-list"]}>{children}</ul>
    </header>
  );
};
