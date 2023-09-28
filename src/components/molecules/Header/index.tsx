import { Button, ButtonProps } from "@/index";
import styles from "./index.module.scss";
interface HeaderProps {
  buttons: ButtonProps[];
}
export const Header = ({ buttons }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <ul className={styles["header_button-list"]}>
        {buttons.map((button, i) => {
          return (
            <li>
              <Button link={button.link} key={i}>
                {button.children}
              </Button>
            </li>
          );
        })}
      </ul>
    </header>
  );
};
