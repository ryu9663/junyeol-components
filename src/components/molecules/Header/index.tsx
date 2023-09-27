import { Button, ButtonProps } from "@/index";
import styles from "./index.module.scss";
interface HeaderProps {
  buttons: ButtonProps[];
}
export const Header = ({ buttons }: HeaderProps) => {
  return (
    <header className={styles.header}>
      {buttons.map((button, i) => {
        return (
          <Button link={button.link} key={i}>
            {button.children}
          </Button>
        );
      })}
    </header>
  );
};
