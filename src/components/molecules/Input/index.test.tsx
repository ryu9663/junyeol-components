import { Input, InputProps } from "@/index";
import { fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";

const CLASSNAME_VALIDATION_ERROR = "_validation-error_bae745";
const CLASSNAME_LABEL_ERROR = "_error_e43dcf";

const TestComponent = ({
  type = "text",
  validation = (value) =>
    String(value).length > 5 ? "5글자 이하로 입력해주세요" : "",
  label,
  placeholder,
}: Partial<InputProps>) => {
  const [state, setState] = useState("");
  return (
    <Input
      label={label}
      type={type}
      value={state}
      onChange={(e) => setState(e.target.value)}
      validation={validation}
      placeholder={placeholder}
    />
  );
};

test("input에 validation을 만족하지 못하면 타이핑이 되지 않는다.", () => {
  render(
    <TestComponent
      type="text"
      validation={(value) =>
        String(value).length > 5 ? "5글자 이하로 입력해주세요" : ""
      }
    />
  );
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "hello" } });
  expect(input).toHaveValue("hello");
  fireEvent.change(input, { target: { value: "hello~world" } });
  expect(input).toHaveValue("hello");
});

test("input wrap에 validation을 props로 할당했을때, input의 입력값이 validation을 만족하지 못하면 red text가 나타난다.", () => {
  render(
    <TestComponent
      type="text"
      validation={(value) =>
        String(value).length > 5 ? "5글자 이하로 입력해주세요" : ""
      }
    />
  );
  // input tag에 'hello~ 입력하면, validation을 만족하지 못하면서 hello까지만 타이핑된다.
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "hello" } });
  expect(input).toHaveValue("hello");
  fireEvent.change(input, { target: { value: "hello~world" } });

  expect(input).toHaveValue("hello");

  // 5글자 이상 입력하면, span tag에 '5글자 이하로 입력해주세요'가 나타난다.
  const span = screen.getByText("5글자 이하로 입력해주세요");
  expect(span).toBeInTheDocument();

  // span tag는 validation-error 라는 class를 가진다.
  expect(span).toHaveClass(CLASSNAME_VALIDATION_ERROR);
});

test("아무것도 입력하지 않았을때는 validation-error text가 나타나지 않는다.", () => {
  render(
    <TestComponent
      type="text"
      validation={(value) =>
        String(value).length > 5 ? "5글자 이하로 입력해주세요" : ""
      }
    />
  );
  const span = screen.queryByText("5글자 이하로 입력해주세요");
  expect(span).not.toBeInTheDocument();
});

test("validation을 만족하면 validation-error text가 나타나지 않는다.", () => {
  render(
    <TestComponent
      type="text"
      validation={(value) =>
        String(value).length > 5 ? "5글자 이하로 입력해주세요" : ""
      }
    />
  );
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "hello" } });
  const span = screen.queryByText("5글자 이하로 입력해주세요");
  expect(span).not.toBeInTheDocument();
});

test("type이 tel에서도 validation이 작동한다.", () => {
  render(
    <TestComponent
      type="tel"
      validation={(value) =>
        String(value).length > 5 ? "5글자 이하로 입력해주세요" : ""
      }
    />
  );
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "hello~" } });
  const span = screen.queryByText("5글자 이하로 입력해주세요");
  expect(span).toBeInTheDocument();
});

test("type이 search에서도 validation이 작동한다.", () => {
  render(
    <TestComponent
      type="search"
      validation={(value) =>
        String(value).length > 5 ? "5글자 이하로 입력해주세요" : ""
      }
    />
  );
  const input = screen.getByRole("searchbox");
  fireEvent.change(input, { target: { value: "hello~" } });
  const span = screen.queryByText("5글자 이하로 입력해주세요");
  expect(span).toBeInTheDocument();
});

test("type이 password일때 validation이 작동한다.", () => {
  render(
    <>
      <TestComponent
        type="password"
        validation={(value) =>
          String(value).length > 5 ? "5글자 이하로 입력해주세요" : ""
        }
        placeholder="password"
      />
    </>
  );
  const input = screen.getByPlaceholderText("password");
  fireEvent.change(input, { target: { value: "hello~" } });
  const span = screen.queryByText("5글자 이하로 입력해주세요");
  expect(span).toBeInTheDocument();
});

test("type이 email 일때도 validation이 작동한다.", () => {
  render(
    <TestComponent
      type="email"
      validation={(value) =>
        String(value).length > 5 ? "5글자 이하로 입력해주세요" : ""
      }
    />
  );

  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "hello~" } });
  const span = screen.queryByText("5글자 이하로 입력해주세요");
  expect(span).toBeInTheDocument();
});

test("label 유무 test", () => {
  render(
    <TestComponent
      type="email"
      validation={(value) =>
        String(value).length > 5 ? "5글자 이하로 입력해주세요" : ""
      }
      label={{ htmlFor: "test", name: "test" }}
    />
  );
  const label = screen.getByText("test");
  expect(label).toBeInTheDocument();
});

test("input이 validation을 만족하지 못하면 label의 text에 error class가 추가된다.", () => {
  render(
    <TestComponent
      type="email"
      validation={(value) =>
        String(value).length > 5 ? "5글자 이하로 입력해주세요" : ""
      }
      label={{ htmlFor: "test", name: "test" }}
    />
  );
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "hello~" } });
  const label = screen.getByText("test");
  expect(label).toHaveClass(CLASSNAME_LABEL_ERROR);
});
