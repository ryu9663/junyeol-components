import { SubCategoryType } from "@/index";
import styles from "./index.module.scss";

export interface CardProps {
  Thumbnail: JSX.Element;
  title: string;
  description: string;
  boxShadow?: boolean;
  onClick?: () => void;
  className?: string;
  createdAt: string;
  subCategoryLink: SubCategoryType["subCategoryLink"];
}

export const Card = ({
  Thumbnail,
  title,
  description,
  boxShadow = true,
  onClick,
  className,
  createdAt,
  subCategoryLink,
}: CardProps) => {
  return (
    <div
      className={`${styles.card} ${
        boxShadow && styles["card_box-shadow"]
      } ${className}`}
      onClick={onClick}
    >
      {Thumbnail}
      <div className={styles["card_content"]}>
        <h3 className={`${styles["card_content-title"]}`}>{title}</h3>
        <div className={`${styles["card_content-description"]}`}>
          {description}
        </div>
        <div className={`${styles["card_content-tagbox"]}`}>
          <div className={`${styles["card_content-tagbox-createdAt"]}`}>
            {createdAt}
          </div>
          <div className={`${styles["card_content-tagbox-tag"]}`}>
            {subCategoryLink}
          </div>
        </div>
      </div>
    </div>
  );
};
