import styles from "./index.module.scss";

export interface CardProps {
  Thumbnail: JSX.Element;
  title: string;
  description: string;
  boxShadow?: boolean;
  onClick?: () => void;
}

export const Card = ({
  Thumbnail,
  title,
  description,
  boxShadow = true,
  onClick,
}: CardProps) => {
  return (
    <div
      className={`${styles.card} ${boxShadow && styles["card_box-shadow"]}`}
      onClick={onClick}
    >
      {Thumbnail}
      <h3 className={`${styles["card_title"]}`}>{title}</h3>
      <div className={`${styles["card_description"]}`}>{description}</div>
    </div>
  );
};
