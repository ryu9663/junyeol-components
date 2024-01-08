import { Checkbox } from "@/components/molecules/Checkbox";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("체크박스를 클릭하면 isChecked가 true가 되고 다시 클릭하면 false가 된다.", async () => {
  const user = userEvent.setup();
  render(<Checkbox />);
  const checkbox = screen.getByRole("checkbox");
  // 클릭
  await user.click(checkbox);
  expect(checkbox).toBeChecked();

  // 다시 클릭
  await user.click(checkbox);
  expect(checkbox).not.toBeChecked();
});
test("체크박스에 isDisabled가 true이면 비활성화 상태가 된다.", () => {
  render(<Checkbox isDisabled />);
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).toBeDisabled();
});

test('isRequired가 true인 체크박스에는 "*"이 표시된다.', () => {
  render(<Checkbox isRequired />);
  const required = screen.getByText("*");
  expect(required).toBeInTheDocument();
});

test("체크박스의 라벨을 클릭해도 체크박스가 체크된다.", async () => {
  const user = userEvent.setup();

  render(<Checkbox label={{ htmlFor: "test", name: "테스트" }} />);
  const checkbox = screen.getByLabelText("테스트");
  expect(checkbox).not.toBeChecked();
  // 클릭
  await user.click(checkbox);
  expect(checkbox).toBeChecked();

  // 다시 클릭
  await user.click(checkbox);
  expect(checkbox).not.toBeChecked();
});

test("라벨도 체크박스에 isDisabled가 true이면 비활성화 상태가 된다.", () => {
  render(<Checkbox isDisabled label={{ htmlFor: "test", name: "테스트" }} />);
  const label = screen.getByLabelText("테스트");
  expect(label).toBeDisabled();
});
