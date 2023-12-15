import { DropdownTag } from "@/index";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const CLASSNAME_CLOSED = "_closed_a06ba1";
const CLASSNAME_CLOSING = "_closing_a06ba1";
const CLASSNAME_OPENING = "_opening_a06ba1";
test("처음에는 children이 closed 상태이다. ", () => {
  render(
    <DropdownTag name="dropdown tag">
      <div>children</div>
    </DropdownTag>
  );

  expect(screen.getByTestId("dropdowntag-dropdown-testid")).toHaveClass(
    CLASSNAME_CLOSED
  );
});
test('Option tag 버튼을 클릭하면 children이 "opening" 상태가 된다.', async () => {
  const user = userEvent.setup();
  render(
    <DropdownTag name="dropdown tag">
      <div>children</div>
    </DropdownTag>
  );
  const optionTag = screen.getByRole("button", { name: "dropdown tag" });
  await user.click(optionTag);
  expect(screen.getByTestId("dropdowntag-dropdown-testid")).toHaveClass(
    CLASSNAME_OPENING
  );
});

test("Option tag 버튼을 클릭해서 껐다 킬 수 있다.", async () => {
  const user = userEvent.setup();
  render(
    <DropdownTag name="dropdown tag">
      <div>children</div>
    </DropdownTag>
  );
  const optionTag = screen.getByRole("button", { name: "dropdown tag" });

  await user.click(optionTag);
  const childrenBox = screen.getByTestId("dropdowntag-dropdown-testid");
  expect(childrenBox).toHaveClass(CLASSNAME_OPENING);
  await user.click(optionTag);
  expect(childrenBox).toHaveClass(CLASSNAME_CLOSING);
});

test("Option tag가 켜졌을때 children을 클릭하면 꺼지지 않는다.", async () => {
  const user = userEvent.setup();
  render(
    <DropdownTag name="dropdown tag">
      <div>children</div>
    </DropdownTag>
  );
  const optionTag = screen.getByRole("button", { name: "dropdown tag" });
  await user.click(optionTag);
  const childrenBox = screen.getByTestId("dropdowntag-dropdown-testid");
  expect(childrenBox).toHaveClass(CLASSNAME_OPENING);
  await user.click(childrenBox);
  expect(childrenBox).toHaveClass(CLASSNAME_OPENING);
});

test("dropdown의 닫기버튼을 클릭해서 끌 수 있다.", async () => {
  const user = userEvent.setup();
  render(
    <DropdownTag name="dropdown tag">
      <div>children</div>
    </DropdownTag>
  );
  const optionTag = screen.getByRole("button", { name: "dropdown tag" });
  await user.click(optionTag);
  const childrenBox = screen.getByTestId("dropdowntag-dropdown-testid");
  expect(childrenBox).toHaveClass(CLASSNAME_OPENING);
  const closeBtn = screen.getByTestId("dropdown-close-btn-testid");
  await user.click(closeBtn);
  expect(childrenBox).toHaveClass(CLASSNAME_CLOSING);
});

test("Option tag 버튼을 클릭하면 children이 0.5초 후에 opened 상태가 된다.", async () => {
  const user = userEvent.setup();
  render(
    <DropdownTag name="dropdown tag">
      <div>children</div>
    </DropdownTag>
  );
  const optionTag = screen.getByRole("button", { name: "dropdown tag" });
  await user.click(optionTag);
  expect(screen.getByTestId("dropdowntag-dropdown-testid")).toHaveClass(
    CLASSNAME_OPENING
  );
  await new Promise((r) => setTimeout(r, 500));
  expect(screen.getByTestId("dropdowntag-dropdown-testid")).toHaveClass(
    "_opened_a06ba1"
  );
});

test("Option tag 이 켜져있을때 closedbtn을 클릭하면 closing 상태로 되고 0.3초후 closed상태가 된다", async () => {
  const user = userEvent.setup();
  render(
    <DropdownTag name="dropdown tag">
      <div>children</div>
    </DropdownTag>
  );
  const optionTag = screen.getByRole("button", { name: "dropdown tag" });
  await user.click(optionTag);
  expect(screen.getByTestId("dropdowntag-dropdown-testid")).toHaveClass(
    CLASSNAME_OPENING
  );
  const closeBtn = screen.getByTestId("dropdown-close-btn-testid");
  await user.click(closeBtn);
  expect(screen.getByTestId("dropdowntag-dropdown-testid")).toHaveClass(
    CLASSNAME_CLOSING
  );
  await new Promise((r) => setTimeout(r, 300));
  expect(screen.getByTestId("dropdowntag-dropdown-testid")).toHaveClass(
    CLASSNAME_CLOSED
  );
});
