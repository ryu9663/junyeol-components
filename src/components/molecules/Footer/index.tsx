import styles from "./index.module.scss";
export const Footer = () => {
  return (
    <footer className={styles.footer_wrapper}>
      <address>
        Phone : 010 2726 9663 <br />
        Email : ryu9663@naver.com
      </address>
      Copyright 2023. 류준열. All rights reserved.
    </footer>
  );
};
