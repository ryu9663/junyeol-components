import { Searchbox } from "@/components/organisms/Searchbox";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, vi } from "vitest";

describe("Searchbox", async () => {
  it("Searchbox에서 검색어를 입력하면 options에서 해당 검색어를 포함하는 요소만 dropdown에 나타나고, options에서 클릭한 항목이 선택된다.", async () => {
    const user = userEvent.setup();

    render(
      <Searchbox
        placeholder={"관광지 검색 수"}
        onClickOption={(value) => console.log("선택된 값", value)}
        options={[
          { name: "10개", value: 10 },
          { name: "20개", value: 20 },
          { name: "30개", value: 30 },
          { name: "40개", value: 40 },
          { name: "50개", value: 50 },
          { name: "100개", value: 100 },
        ]}
      />,
    );

    // 10을 입력하면 드롭다운에는 "10개", "100개"만 나타난다.
    const input = screen.getByPlaceholderText("관광지 검색 수");
    await user.type(input, "10");

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent("10개");
    expect(buttons[1]).toHaveTextContent("100개");

    // 10개를 클릭하면 10가 선택되고, 100을 클릭하면 100이 선택된다.
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => undefined);

    await user.click(buttons[0]);
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith("선택된 값", 10);

    await user.click(buttons[1]);
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith("선택된 값", 100);
    // 100개를 클릭하면 20이 선택되지 않는다.
    await user.click(buttons[1]);
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).not.toHaveBeenCalledWith("선택된 값", 20);
  });

  it("Searchbox가 블러되면 dropdown이 사라진다.", () => {
    render(
      <Searchbox
        placeholder={"관광지 검색 수"}
        onClickOption={(value) => console.log("선택된 값", value)}
        options={[
          { name: "10개", value: 10 },
          { name: "20개", value: 20 },
          { name: "30개", value: 30 },
          { name: "40개", value: 40 },
          { name: "50개", value: 50 },
          { name: "100개", value: 100 },
        ]}
      />,
    );

    const input = screen.getByPlaceholderText("관광지 검색 수");
    userEvent.type(input, "10");
    fireEvent.blur(input);
    const buttons = screen.queryAllByRole("button");
    expect(buttons).toHaveLength(0);
  });
});
