import styles from "./index.module.scss";

export interface ImageProps {
  url: string;
  alt: string;
}

export interface CardProps {
  image: ImageProps;
  title: string;
  description: string;
  boxShadow?: boolean;
  onClick?: () => void;
}

export const Card = ({
  image,
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
      <img src={image.url} alt={image.alt} width={240} height={240} />
      <h3 className={`${styles["card_title"]}`}>{title}</h3>
      <div className={`${styles["card_description"]}`}>{description}</div>
    </div>
  );
};
