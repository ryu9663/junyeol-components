import { Selectbox } from "@/components/molecules/Selectbox";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, vi } from "vitest";

const CLASSNAME_OPENING = "_opening_344714";
const CLASSNAME_CLOSING = "_closing_344714";

test("처음에는 닫혀있다.", () => {
  render(
    <Selectbox
      size="medium"
      name={"Select"}
      options={[
        { name: "사과", value: "apple" },
        { name: "포도", value: "graph" },
      ]}
      onChange={(value) => console.log(value)}
    />
  );

  // select box is closed at first
  const options = screen.queryByRole("list");
  expect(options).not.toBeInTheDocument();
});

test("when select box is clicked, it should be opened", async () => {
  const user = userEvent.setup();
  render(
    <Selectbox
      size="medium"
      name={"Select"}
      options={[
        { name: "사과", value: "apple" },
        { name: "포도", value: "graph" },
      ]}
      onChange={(value) => console.log(value)}
    />
  );

  const selectbox = screen.getByRole("button", { name: "Select" });

  // click select button
  await user.click(selectbox);

  const options = screen.queryByRole("list");

  // div tag which has class named dropdown is opened
  expect(options).toHaveClass(CLASSNAME_OPENING);

  expect(options).toBeInTheDocument();
});

test("드롭다운을 클릭하면, 드롭다운은 closing상태가 되고 천천히 꺼진다.", async () => {
  const user = userEvent.setup();
  render(
    <Selectbox
      size="medium"
      name={"Select"}
      options={[
        { name: "사과", value: "apple" },
        { name: "포도", value: "graph" },
      ]}
      onChange={(value) => console.log(value)}
    />
  );
  const selectbox = screen.getByRole("button", { name: "Select" });

  // click select button
  await user.click(selectbox);
  const dropdown = screen.queryByRole("list");
  const dropdownItem = screen.getByRole("button", { name: "사과" });
  expect(dropdown).toBeInTheDocument();
  expect(dropdownItem).toBeInTheDocument();

  // click dropdown item which has value "apple"
  await user.click(dropdownItem);

  // onChange is fired
  const logSpy = vi.spyOn(console, "log").mockImplementation(() => undefined);
  console.log("apple");
  expect(logSpy).toHaveBeenCalledWith("apple");

  // selectbox's name is changed to selected dropdown item's name
  expect(selectbox).toHaveTextContent("사과");

  // dropdown is closed
  expect(dropdown).toHaveClass(CLASSNAME_CLOSING);
  await new Promise((r) => setTimeout(r, 500));
  expect(dropdown).not.toBeInTheDocument();
  expect(dropdownItem).not.toBeInTheDocument();
});

test("셀렉트박스가 포커스를 잃으면 천천히 닫힌다.", async () => {
  const user = userEvent.setup();
  render(
    <Selectbox
      size="medium"
      name={"Select"}
      options={[
        { name: "사과", value: "apple" },
        { name: "포도", value: "graph" },
      ]}
      onChange={(value) => console.log(value)}
    />
  );
  const selectBox = screen.getByRole("button", { name: "Select" });

  // click Select box
  await user.click(selectBox);
  const dropdown = screen.getByRole("button", { name: "사과" });
  expect(dropdown).toBeInTheDocument();

  // click dropdown item
  const dropdownItem = screen.getByRole("button", { name: "사과" });
  await user.click(dropdownItem);
  await new Promise((r) => setTimeout(r, 500));

  // dropdown is closed
  expect(dropdown).not.toBeInTheDocument();
  expect(dropdownItem).not.toBeInTheDocument();
});
