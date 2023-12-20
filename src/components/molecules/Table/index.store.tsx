import { create } from "zustand";

interface TableStoreProps {
  hoveredColumn?: number;
  setHoveredColumn: (hoveredColumn?: number) => void;
}
export const useTableStore = create<TableStoreProps>((set) => ({
  hoveredColumn: undefined,
  setHoveredColumn: (hoveredColumn?: number) =>
    set({
      hoveredColumn: hoveredColumn,
    }),
}));
