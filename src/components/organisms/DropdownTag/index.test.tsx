import { DropdownTag } from "@/index";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const CLASSNAME_CLOSING = "_closing_fca62a";
const CLASSNAME_OPEN = "_open_fca62a";
test("처음에는 children이 closed 상태이다. ", () => {
  render(
    <DropdownTag name="dropdown tag">
      <div>children</div>
    </DropdownTag>
  );
  const dropdown = screen.queryByTestId("dropdown-testid");
  expect(dropdown).not.toBeInTheDocument();
});

test('Option tag 버튼을 클릭하면 children이 "opening" 상태가 된다.', async () => {
  const user = userEvent.setup();
  render(
    <DropdownTag name="dropdown tag">
      <div>children</div>
    </DropdownTag>
  );
  const dropdownTag = screen.getByRole("button", { name: "dropdown tag" });
  await user.click(dropdownTag);
  expect(screen.getByTestId("dropdown-testid")).toHaveClass(CLASSNAME_OPEN);
});

test("Option tag 버튼을 클릭해서 껐다 킬 수 있다.", async () => {
  const user = userEvent.setup();
  render(
    <DropdownTag name="dropdown tag">
      <div>children</div>
    </DropdownTag>
  );
  const dropdownTag = screen.getByRole("button", { name: "dropdown tag" });

  await user.click(dropdownTag);
  const childrenBox = screen.getByTestId("dropdown-testid");
  expect(childrenBox).toHaveClass(CLASSNAME_OPEN);
  await user.click(dropdownTag);
  expect(childrenBox).toHaveClass(CLASSNAME_CLOSING);
});

test("Option tag가 켜졌을때 children을 클릭하면 꺼지지 않는다.", async () => {
  const user = userEvent.setup();
  render(
    <DropdownTag name="dropdown tag">
      <div>children</div>
    </DropdownTag>
  );
  const dropdownTag = screen.getByRole("button", { name: "dropdown tag" });
  await user.click(dropdownTag);
  const childrenBox = screen.getByTestId("dropdown-testid");
  expect(childrenBox).toHaveClass(CLASSNAME_OPEN);
  await user.click(childrenBox);
  expect(childrenBox).toHaveClass(CLASSNAME_OPEN);
});

test("dropdown의 닫기버튼을 클릭해서 끌 수 있다.", async () => {
  const user = userEvent.setup();
  render(
    <DropdownTag name="dropdown tag">
      <div>children</div>
    </DropdownTag>
  );
  const dropdownTag = screen.getByRole("button", { name: "dropdown tag" });
  await user.click(dropdownTag);
  const childrenBox = screen.getByTestId("dropdown-testid");
  expect(childrenBox).toHaveClass(CLASSNAME_OPEN);
  const closeBtn = screen.getByTestId("dropdown-close-btn-testid");
  await user.click(closeBtn);
  expect(childrenBox).toHaveClass(CLASSNAME_CLOSING);
});

test("Option tag 버튼을 클릭하면 children이 open 상태가 된다.", async () => {
  const user = userEvent.setup();
  render(
    <DropdownTag name="dropdown tag">
      <div>children</div>
    </DropdownTag>
  );
  const dropdownTag = screen.getByRole("button", { name: "dropdown tag" });
  await user.click(dropdownTag);
  expect(screen.getByTestId("dropdown-testid")).toHaveClass(CLASSNAME_OPEN);
});

test("dropdown tag 가 켜져있을때 closedbtn을 클릭하면 closing 상태로 되고 잠시후 closed상태가 된다", async () => {
  const user = userEvent.setup();
  render(
    <DropdownTag name="dropdown tag">
      <div>children</div>
    </DropdownTag>
  );
  const dropdownTag = screen.getByRole("button", { name: "dropdown tag" });
  await user.click(dropdownTag);
  expect(screen.getByTestId("dropdown-testid")).toHaveClass(CLASSNAME_OPEN);
  const closeBtn = screen.getByTestId("dropdown-close-btn-testid");
  await user.click(closeBtn);
  expect(screen.getByTestId("dropdown-testid")).toHaveClass(CLASSNAME_CLOSING);
  await new Promise((r) => setTimeout(r, 500));
  const dropdown = screen.queryByTestId("dropdown-testid");
  screen.debug();
  expect(dropdown).not.toBeInTheDocument();
});
