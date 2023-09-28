import styles from "./index.module.scss";

interface ImageProps {
  url: string;
  alt: string;
  width: number;
  height: number;
}
interface CardProps {
  img: ImageProps;
  descriptionFontSize: "small" | "normal" | "large";
}
export const Card = ({ img, descriptionFontSize }: CardProps) => {
  const fontSizeClass = (() => {
    switch (descriptionFontSize) {
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
    <div className={styles.card}>
      <img src={img.url} alt={img.alt} width={img.width} height={img.height} />
      <div
        className={`${styles["card_description"]} ${styles[fontSizeClass]}`}
      ></div>
    </div>
  );
};
