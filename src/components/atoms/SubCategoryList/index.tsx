import { CategoryType } from "@/components/molecules/Category";
import styles from "./index.module.scss";

export type LinkType = JSX.Element;

export interface SubCategoryType {
  subCategoryLink: LinkType;
  publishedAt: string;
}
export interface SubCategoryListProps {
  subCategories: SubCategoryType[];
}

export type SidebarType = Partial<Record<CategoryType, string>>;

export const SubCategoryList = ({ subCategories }: SubCategoryListProps) => {
  const isRecentPublication = (publishedAt: string): boolean => {
    const today = new Date();
    const publishedDate = new Date(publishedAt);

    // 3일을 밀리초로 변환합니다.
    const threeDaysInMilliseconds = 3 * 24 * 60 * 60 * 1000;

    // 현재 날짜와 publishedDate 사이의 차이를 계산하고, 3일(밀리초 단위)보다 큰지 확인합니다.
    return today.getTime() - publishedDate.getTime() <= threeDaysInMilliseconds;
  };

  return (
    <div className={styles.sub_category_wrapper}>
      <ul>
        {subCategories.map((subCategory, i) => (
          <li key={i}>
            {subCategory.subCategoryLink}
            {isRecentPublication(subCategory.publishedAt) && (
              <span className={styles.new}>new</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
