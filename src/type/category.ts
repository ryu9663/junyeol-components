export type SubCategoryType = "dev" | "mystory" | "retrospect" | "book";

export type CategoryType = Partial<Record<SubCategoryType, string>>;
