import { Selectbox } from "@/components/molecules/Selectbox";
import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";

const CLASSNAME_OPEN = "_open_3a1db3";
test("selectbox is closed at first", () => {
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
  const selectbox = screen.getByRole("button", { name: "Select" });
  expect(selectbox).not.toHaveClass(CLASSNAME_OPEN);
});

test("when select box is clicked, it should be opened", () => {
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
  fireEvent.click(selectbox);

  // div tag which has class named dropdown is opened
  expect(selectbox).toHaveClass(CLASSNAME_OPEN);

  const dropdown = screen.getByRole("list");

  expect(dropdown).toBeInTheDocument();
});

test("when dropdown is clicked, it should be closed and onChange is fired and selectbox's name is changed to selected dropdown item's name", () => {
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
  fireEvent.click(selectbox);
  const dropdown = screen.getByRole("list");
  const dropdownItem = screen.getByRole("button", { name: "사과" });
  expect(dropdown).toBeInTheDocument();
  expect(dropdownItem).toBeInTheDocument();

  // click dropdown item which has value "apple"
  fireEvent.click(dropdownItem);

  // onChange is fired
  const logSpy = vi.spyOn(console, "log").mockImplementation(() => undefined);
  console.log("apple");
  expect(logSpy).toHaveBeenCalledWith("apple");

  // selectbox's name is changed to selected dropdown item's name
  expect(selectbox).toHaveTextContent("사과");

  // dropdown is closed
  expect(selectbox).not.toHaveClass(CLASSNAME_OPEN);
  expect(dropdown).not.toBeInTheDocument();
  expect(dropdownItem).not.toBeInTheDocument();
});

test("when select lost focus, it should be closed", () => {
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
  fireEvent.click(selectBox);
  const dropdown = screen.getByRole("button", { name: "사과" });
  expect(dropdown).toBeInTheDocument();

  // click dropdown item
  const dropdownItem = screen.getByRole("button", { name: "사과" });
  fireEvent.click(dropdownItem);

  // dropdown is closed
  expect(selectBox).not.toHaveClass(CLASSNAME_OPEN);
  expect(dropdown).not.toBeInTheDocument();
});
