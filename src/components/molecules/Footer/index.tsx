import styles from "./index.module.scss";
export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer_wrapper}>
      <address>
        Phone : 010 2726 9663 <br />
        Email : ryu9663@naver.com
      </address>
      {`Copyright ${year}. 류준열. All rights reserved.`}
    </footer>
  );
};
