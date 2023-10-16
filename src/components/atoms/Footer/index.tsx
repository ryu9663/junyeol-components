import styles from "./index.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>Copyright 2023. June. All rights reserved.</div>
      <br />
      <address>
        Email : ryu9663@naver.com <br />
        Phone : 010 2726 9663
      </address>
    </footer>
  );
};
