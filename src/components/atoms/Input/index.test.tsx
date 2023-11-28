import { Input } from "@/index";
import { fireEvent, render, screen } from "@testing-library/react";

const CLASSNAME_VALIDATION_ERROR = "_validation-error_633424";
test("input box에 이름이 입력되면 onChange가 호출되고, input box의 value가 변경된다.", () => {
  render(<Input type="text" onChange={(e) => console.log(e.target.value)} />);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "hello" } });
  expect(input).toHaveValue("hello");
});

test("input wrap에 validation을 props로 할당했을때, input의 입력값이 validation을 만족하지 못하면 red text가 나타난다.", () => {
  render(
    <Input
      type="text"
      validation={(value) =>
        String(value).length > 5 ? "5글자 이하로 입력해주세요" : ""
      }
    />
  );
  // input tag에 'hello~ 입력하면, input tag의 value가 hello~가 된다.
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "hello~" } });
  expect(input).toHaveValue("hello~");

  // 5글자 이상 입력하면, span tag에 '5글자 이하로 입력해주세요'가 나타난다.
  const span = screen.getByText("5글자 이하로 입력해주세요");
  expect(span).toBeInTheDocument();

  // span tag는 validation-error 라는 class를 가진다.
  expect(span).toHaveClass(CLASSNAME_VALIDATION_ERROR);
});

test("아무것도 입력하지 않았을때는 validation-error text가 나타나지 않는다.", () => {
  render(
    <Input
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
    <Input
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
    <Input
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
    <Input
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

test("type이 password 이고 label이 있으면 validation이 작동한다.", () => {
  render(
    <>
      <Input
        type="password"
        validation={(value) =>
          String(value).length > 5 ? "5글자 이하로 입력해주세요" : ""
        }
        placeholder="password"
      />

      <Input.Label htmlFor="password">비밀번호</Input.Label>
    </>
  );
  const input = screen.getByPlaceholderText("password");
  fireEvent.change(input, { target: { value: "hello~" } });
  const span = screen.queryByText("5글자 이하로 입력해주세요");
  expect(span).toBeInTheDocument();
});

test("type이 email 일때도 validation이 작동한다.", () => {
  render(
    <Input
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
