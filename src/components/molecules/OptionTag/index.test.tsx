import { OptionTag } from "@/index";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const CLASSNAME_CLOSED = "_closed_a06ba1";
const CLASSNAME_OPENED = "_opened_a06ba1";
test("처음에는 children이 보이지 않는다. ", () => {
  render(
    <OptionTag name="option tag">
      <div>children</div>
    </OptionTag>
  );

  expect(screen.getByTestId("optiontag-dropdown-testid")).toHaveClass(
    CLASSNAME_CLOSED
  );
});

test("Option tag 버튼을 클릭해서 껐다 킬 수 있다.", async () => {
  const user = userEvent.setup();
  render(
    <OptionTag name="option tag">
      <div>children</div>
    </OptionTag>
  );
  const optionTag = screen.getByRole("button", { name: "option tag" });

  await user.click(optionTag);
  const childrenBox = screen.getByTestId("optiontag-dropdown-testid");
  expect(childrenBox).toHaveClass(CLASSNAME_OPENED);
  await user.click(optionTag);
  expect(childrenBox).toHaveClass(CLASSNAME_CLOSED);
});

test("Option tag가 켜졌을때 blur되면 즉, 외부를 클릭하면 꺼진다.", async () => {
  const user = userEvent.setup();
  render(
    <OptionTag name="option tag">
      <div>children</div>
    </OptionTag>
  );
  const optionTag = screen.getByRole("button", { name: "option tag" });
  await user.click(optionTag);
  const childrenBox = screen.getByTestId("optiontag-dropdown-testid");
  expect(childrenBox).toHaveClass(CLASSNAME_OPENED);
  await user.click(document.body);
  expect(childrenBox).toHaveClass(CLASSNAME_CLOSED);
});

test("Option tag가 켜졌을때 children을 클릭하면 꺼지지 않는다.", async () => {
  const user = userEvent.setup();
  render(
    <OptionTag name="option tag">
      <div>children</div>
    </OptionTag>
  );
  const optionTag = screen.getByRole("button", { name: "option tag" });
  await user.click(optionTag);
  const childrenBox = screen.getByTestId("optiontag-dropdown-testid");
  expect(childrenBox).toHaveClass(CLASSNAME_OPENED);
  await user.click(childrenBox);
  expect(childrenBox).toHaveClass(CLASSNAME_OPENED);
});
