/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ReactElement } from "react";
import styles from "./index.module.scss";

type LinkType = JSX.Element;

type AllowedLinkType<T extends string> = T extends CategoryType
  ? LinkType
  : never;

export type CategoryType = "dev" | "mystory" | "retrospect" | "book";
export type CategoryLinkType = AllowedLinkType<CategoryType>;

export interface CategoryProps {
  children: ReactElement;
  CategoryLink: CategoryLinkType;
}
export const Category = ({ CategoryLink, children }: CategoryProps) => {
  return (
    <div className={styles.category}>
      <div className={styles.category_name}>{CategoryLink}</div>
      <div className={styles.sub_category}>{children}</div>
    </div>
  );
};
