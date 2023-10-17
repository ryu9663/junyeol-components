import styles from "./index.module.scss";

export interface SubCategoryListProps {
  subCategory: {
    category: JSX.Element;
    publishedAt: Date;
  }[];
}
export const SubCategoryList = ({ subCategory }: SubCategoryListProps) => {
  const isThreeDaysAgo = (date: Date): boolean => {
    const today = new Date();
    const threeDaysAgo = new Date(today.setDate(today.getDate() - 4));
    return date > threeDaysAgo;
  };

  return (
    <div className={styles.sub_category_wrapper}>
      <ul>
        {subCategory.map((el, i) => (
          <li key={i}>
            {el.category}
            {isThreeDaysAgo(el.publishedAt) && (
              <span className={styles.new}>new</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
