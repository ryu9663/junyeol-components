import styles from "./index.module.scss";

export type LinkType = JSX.Element;

export interface SubCategoryType {
  categoryLink: LinkType; // link
  publishedAt: Date;
}
export interface SubCategoryListProps {
  subCategories: SubCategoryType[];
}

export type CategoryType = "dev" | "mystory" | "retrospect" | "book";

export type SidebarType = Partial<Record<CategoryType, string>>;

export const SubCategoryList = ({ subCategories }: SubCategoryListProps) => {
  const isThreeDaysAgo = (date: Date): boolean => {
    const today = new Date();
    const threeDaysAgo = new Date(today.setDate(today.getDate() - 4));
    return date > threeDaysAgo;
  };

  return (
    <div className={styles.sub_category_wrapper}>
      <ul>
        {subCategories.map((subCategory, i) => (
          <li key={i}>
            {subCategory.categoryLink}
            {isThreeDaysAgo(subCategory.publishedAt) && (
              <span className={styles.new}>new</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
