import styles from "./index.module.scss";

interface ImageProps {
  src: string;
  alt: string;
}

interface CardProps {
  img: ImageProps;
  title: string;
  description: string;
  boxShadow?: boolean;
  onClick?: () => void;
}

export const Card = ({
  img,
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
      <img src={img.src} alt={img.alt} width={340} height={340} />
      <h3 className={`${styles["card_title"]}`}>{title}</h3>
      <div className={`${styles["card_description"]}`}>{description}</div>
    </div>
  );
};
