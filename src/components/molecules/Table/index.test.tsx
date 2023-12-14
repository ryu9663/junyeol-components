import { Table } from "@/index";
import { render } from "@testing-library/react";

const COLUMN_INDEX = {
  CAPYABLE: 4,
  LONG_TEXT: 6,
  LONG_TEXT_COPYABLE: 7,
};

const TestTable = () => (
  <Table>
    <Table.Body>
      {[
        {
          학교: "서울대학교",
          이름: "류준열2",
          학번: "2015039077",
          학점: 4.5,
          군필: true,
          졸업여부: true,
          자기소개: `안녕하여러분 이건 매우 긴 텍스트입니다. 
        처음에는 말줄임표로 나타나지만, 
        Hover하면 전체 내용을 볼 수 있답니다.`,
          복사가능한_자기소개: `안녕하`,
        },
      ].map((body, rowIndex) => (
        <Table.Row key={rowIndex}>
          {Object.values(body).map((e, columnIndex) => {
            if (typeof e === "boolean")
              return <Table.Cell key={columnIndex}>{e ? "O" : "X"}</Table.Cell>;
            return (
              <Table.Cell
                key={columnIndex}
                maxWidth={
                  [
                    COLUMN_INDEX.LONG_TEXT,
                    COLUMN_INDEX.LONG_TEXT_COPYABLE,
                  ].includes(columnIndex)
                    ? "150px"
                    : undefined
                }
              >
                {e + String(rowIndex + 1)}
              </Table.Cell>
            );
          })}
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

// const Test = () => {
//   const [isHover, setIsHover] = useState(false);
//   return (
//     <div>
//       <div
//         onMouseEnter={() => setIsHover(true)}
//         onMouseLeave={() => setIsHover(false)}
//       >
//         {isHover ? "hover" : "not hover"}
//       </div>
//     </div>
//   );
// };
// test("컴포넌트 hover Test", async () => {
//   const user = userEvent.setup();

//   render(<Test />);
//   const div = screen.getByText("not hover");
//   expect(div).toBeVisible();
//   await user.hover(div);
//   expect(div).toHaveTextContent("hover");
//   await user.unhover(div);
//   expect(div).toHaveTextContent("not hover");
// });

test("말줄임표가 나타난 table cell에 hover하면 전체 text를 볼 수 있다. ", () => {
  render(<TestTable />);
  // 하다가 잠듬..
});

test("copiable cell은 복사가 가능하다.", () => {
  render(<TestTable />);
});
