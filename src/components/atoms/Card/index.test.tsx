import "@testing-library/jest-dom";
import { Card } from "@/index";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Card에 image,h3,description들이 있는지 확인", () => {
  it("renders Card", () => {
    render(
      <Card
        createdAt="2023. 10. 16. "
        subCategoryLink={<a href="/react">react</a>}
        Thumbnail={
          <img
            width={240}
            height={240}
            src="https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100"
            alt="아무거나"
          />
        }
        title="아무거나"
        description="암거나"
      />
    );
  });

  it('check if <img src = "https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100" src = "아무거나"/>', () => {
    render(
      <Card
        createdAt="2023. 10. 16. "
        subCategoryLink={<a href="/react">react</a>}
        Thumbnail={
          <img
            width={240}
            height={240}
            src="https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100"
            alt="아무거나"
          />
        }
        title="아무거나"
        description="암거나"
      />
    );
    const imgElement = screen.getByRole("img", { name: "아무거나" });
    expect(imgElement).toBeInTheDocument();
  });

  it("check if <h3>아무거나</h3> is in the document", () => {
    render(
      <Card
        createdAt="2023. 10. 16. "
        subCategoryLink={<a href="/react">react</a>}
        Thumbnail={
          <img
            width={240}
            height={240}
            src="https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100"
            alt="아무거나"
          />
        }
        title="아무거나"
        description="암거나"
      />
    );
    const h3Element = screen.getByRole("heading", { name: "아무거나" });

    expect(h3Element).toBeInTheDocument();
  });

  it("check if <div>'암거나'</div> is in the document", () => {
    render(
      <Card
        createdAt="2023. 10. 16. "
        subCategoryLink={<a href="/react">react</a>}
        Thumbnail={
          <img
            width={240}
            height={240}
            src="https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100"
            alt="아무거나"
          />
        }
        title="아무거나"
        description="암거나"
      />
    );
    const divElement = screen.getByText("암거나");

    expect(divElement).toBeInTheDocument();
  });

  it("check image의 width=240, height=240이 유지되는지 ", () => {
    render(
      <Card
        createdAt="2023. 10. 16. "
        subCategoryLink={<a href="/react">react</a>}
        Thumbnail={
          <img
            width={240}
            height={240}
            src="https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100"
            alt="아무거나"
          />
        }
        title="아무거나"
        description="암거나"
      />
    );
    const imgElement = screen.getByRole("img", { name: "아무거나" });
    expect(imgElement).toHaveAttribute("width", "240");
    expect(imgElement).toHaveAttribute("height", "240");
  });
});
