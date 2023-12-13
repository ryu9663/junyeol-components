import { Table } from "@/index";
import { render } from "@testing-library/react";

test("table cell에서 text가 cell의 width를 초과하면 말줄임표로 나타난다. ", () => {
  render(<Table />);
});

test("말줄임표가 나타난 table cell에 hover하면 전체 text를 볼 수 있고, 스크롤 가능하다. ", () => {
  render(<Table />);
});

test("copiable cell은 복사가 가능하다.", () => {
  render(<Table />);
});
