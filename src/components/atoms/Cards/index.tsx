import styles from "./index.module.scss";

interface ImageProps {
  url: string;
  alt: string;
}
interface CardProps {
  img: ImageProps;
  description: {
    fontSize: "small" | "normal" | "large";
    content: string;
  };
  onClick?: () => void;
}
export const Card = ({ img, description, onClick }: CardProps) => {
  const fontSizeClass = (() => {
    switch (description.fontSize) {
      case "small": {
        return "font-size-small";
      }
      case "normal": {
        return "font-size-normal";
      }
      case "large": {
        return "font-size-large";
      }
      default: {
        return "font-size-normal";
      }
    }
  })();

  return (
    <div className={styles.card} onClick={onClick}>
      <img src={img.url} alt={img.alt} width={340} height={340} />
      <div className={`${styles["card_description"]} ${styles[fontSizeClass]}`}>
        {description.content}
      </div>
    </div>
  );
};
