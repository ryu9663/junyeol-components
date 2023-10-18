import { PropsWithChildren } from "react";
import styles from "./index.module.scss";
import { LinkType } from "@/index";

export interface SiderbarProps extends PropsWithChildren {
  linkToPosts: LinkType;
}
export const Sidebar = ({ linkToPosts, children }: SiderbarProps) => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.link_to_posts}>{linkToPosts}</div>
      {children}
    </nav>
  );
};
