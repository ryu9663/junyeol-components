import { Modal } from "@/index";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

test("모달의 isOpen 이 false일때는 모달이 꺼져 있다.", () => {
  render(
    <Modal
      onOk={() => console.log("ok")}
      onClose={() => console.log("close")}
      isOpen={false}
    >
      <Modal.Header>헤더</Modal.Header>
      <Modal.Body>바디</Modal.Body>
    </Modal>
  );
  const modal = screen.queryByRole("dialog");
  expect(modal).not.toBeInTheDocument();
});

test("모달을 클릭했을때 모달이 꺼지지 않는다.", async () => {
  const user = userEvent.setup();

  render(
    <Modal
      onOk={() => console.log("ok")}
      onClose={() => console.log("close")}
      isOpen
    >
      <Modal.Header>헤더</Modal.Header>
      <Modal.Body>바디</Modal.Body>
    </Modal>
  );
  const modal = screen.getByRole("dialog");

  await user.click(modal);

  expect(modal).toBeInTheDocument();
});

test("모달 외부(backdrop)를 클릭했을때 onClose가 실행된다..", async () => {
  const user = userEvent.setup();

  render(
    <Modal
      onOk={() => console.log("ok")}
      onClose={() => console.log("close")}
      isOpen
    >
      <Modal.Header>헤더</Modal.Header>
      <Modal.Body>바디</Modal.Body>
    </Modal>
  );
  const backdrop = screen.getByTestId("backdrop-testid");

  const logSpy = vi.spyOn(console, "log").mockImplementation(() => undefined);

  await user.click(backdrop);

  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledWith("close");
});

test("모달 footer의 확인버튼을 누르면 onOk가 실행된다.", async () => {
  const user = userEvent.setup();

  render(
    <Modal
      onOk={() => console.log("ok")}
      onClose={() => console.log("close")}
      isOpen
    >
      <Modal.Header>헤더</Modal.Header>
      <Modal.Body>바디</Modal.Body>
    </Modal>
  );
  const okBtn = screen.getByText("확인");
  const logSpy = vi.spyOn(console, "log").mockImplementation(() => undefined);

  await user.click(okBtn);

  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledWith("ok");
});

test("모달 footer의 취소버튼을 누르면 onClose가 실행된다.", async () => {
  const user = userEvent.setup();

  render(
    <Modal
      onOk={() => console.log("ok")}
      onClose={() => console.log("close")}
      isOpen
    >
      <Modal.Header>헤더</Modal.Header>
      <Modal.Body>바디</Modal.Body>
    </Modal>
  );
  const closeBtn = screen.getByText("취소");
  const logSpy = vi.spyOn(console, "log").mockImplementation(() => undefined);

  await user.click(closeBtn);

  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledWith("close");
});

test("모달 header에 x버튼을 클릭하면 onClose가 실행된다.", async () => {
  const user = userEvent.setup();

  render(
    <Modal
      onOk={() => console.log("ok")}
      onClose={() => console.log("close")}
      isOpen
    >
      <Modal.Header>헤더</Modal.Header>
      <Modal.Body>바디</Modal.Body>
    </Modal>
  );
  const closeBtn = screen.getByTestId("modal-close-btn");

  const logSpy = vi.spyOn(console, "log").mockImplementation(() => undefined);

  await user.click(closeBtn);

  expect(logSpy).toHaveBeenCalled();
  expect(logSpy).toHaveBeenCalledWith("close");
});
