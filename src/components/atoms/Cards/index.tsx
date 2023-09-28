import styles from "./index.module.scss";

interface ImageProps {
  url: string;
  alt: string;
}

export type DescriptionFontSizeType = "small" | "normal" | "large";
interface CardProps {
  img: ImageProps;
  description: {
    fontSize: DescriptionFontSizeType;
    content: string;
  };
  boxShadow?: boolean;
  onClick?: () => void;
}
export const Card = ({
  img,
  description,
  boxShadow = true,
  onClick,
}: CardProps) => {
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
    <div
      className={`${styles.card} ${boxShadow && styles["card_box-shadow"]}`}
      onClick={onClick}
    >
      <img src={img.url} alt={img.alt} width={340} height={340} />
      <div className={`${styles["card_description"]} ${styles[fontSizeClass]}`}>
        {description.content}
      </div>
    </div>
  );
};
