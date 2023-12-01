import { Backdrop } from "@/components/atoms/Backdrop";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

const CLASSNAME_BACKDROP = "_backdrop_0b4842 _shadow_0b4842";
const CLASSNAME_BLUR = "_blur_0b4842";
const CLASSNAME_TRANSPERANT = "_transparent_0b4842";
const CLASSNAME_SHADOW = "_shadow_0b4842";
const CLASSNAME_CLOSED = "_closed_0b4842";

test("backdrop init test", () => {
  render(
    <Backdrop
      isOpen={true}
      onClose={() => console.log("close")}
      type="shadow"
    />
  );

  const backdrop = screen.getByTestId("backdrop-testid");
  expect(backdrop).toBeInTheDocument();
  expect(backdrop).toHaveClass(CLASSNAME_BACKDROP);
});
test("backdrop을 클릭하면 onClose가 실행된다.", async () => {
  const onCloseMock = vi
    .spyOn(console, "log")
    .mockImplementation(() => undefined);

  const user = userEvent.setup();

  render(
    <Backdrop
      isOpen={true}
      onClose={() => console.log("close")}
      type="shadow"
    />
  );
  const backdrop = screen.getByTestId("backdrop-testid");

  // backdrop을 클릭하면 onClose가 실행된다.
  await user.click(backdrop);
  // onClose가 실행된다.
  // (지금은 onClose={() => console.log("close")} 이므로 console.log("close")가 실행된다.)
  expect(onCloseMock).toHaveBeenCalled();
  expect(onCloseMock).toHaveBeenCalledWith("close");
});

test("backdrop의 isOpen 이 false이면 closed 클래스를 갖는다.", () => {
  render(
    <Backdrop
      isOpen={false}
      onClose={() => console.log("close")}
      type="shadow"
    />
  );
  const backdrop = screen.getByTestId("backdrop-testid");
  expect(backdrop).toHaveClass(CLASSNAME_CLOSED);
});

test("backdrop을 클릭하지 않고 다른 컴포넌트를 클릭하면 onClose가 실행되지 않는다.", async () => {
  const onCloseMock = vi
    .spyOn(console, "log")
    .mockImplementation(() => undefined);

  const user = userEvent.setup();
  const TestComponent = () => {
    return (
      <>
        <Backdrop
          isOpen={true}
          onClose={() => console.log("close")}
          type="shadow"
        >
          <div>modal body</div>
        </Backdrop>
      </>
    );
  };
  render(<TestComponent />);
  const modalBody = screen.getByText("modal body");
  // backdrop을 클릭하지 않고 다른 컴포넌트를 클릭하면 onClose가 실행되지 않는다.
  await user.click(modalBody);
  // onClose가 실행되지 않는다.
  expect(onCloseMock).not.toHaveBeenCalled();
});

test("type props에 따라 class가 바뀐다 : transparent", () => {
  render(
    <Backdrop
      isOpen={true}
      onClose={() => console.log("close")}
      type="transparent"
    />
  );
  const backdrop = screen.getByTestId("backdrop-testid");
  expect(backdrop).toHaveClass(CLASSNAME_TRANSPERANT);
});

test("type props에 따라 class가 바뀐다 : blur", () => {
  render(
    <Backdrop isOpen={true} onClose={() => console.log("close")} type="blur" />
  );
  const backdrop = screen.getByTestId("backdrop-testid");
  expect(backdrop).toHaveClass(CLASSNAME_BLUR);
});

test("type props에 따라 class가 바뀐다 : shadow", () => {
  render(
    <Backdrop
      isOpen={true}
      onClose={() => console.log("close")}
      type="shadow"
    />
  );
  const backdrop = screen.getByTestId("backdrop-testid");
  expect(backdrop).toHaveClass(CLASSNAME_SHADOW);
});
