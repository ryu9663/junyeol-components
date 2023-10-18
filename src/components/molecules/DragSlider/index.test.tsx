import { Card, DragSlider } from "@/index";
import { render, screen } from "@testing-library/react";
import { Link } from "react-router-dom";
import { describe, expect, it } from "vitest";

describe("Card를 사용하는 DragSlider 렌더링 테스트", () => {
  it("DragSlider의 카드 내부에 h3인 title과 div인 description이 있는지 확인", () => {
    render(
      <DragSlider>
        {[
          {
            Thumbnail: (
              <img
                width={240}
                height={240}
                src="https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100"
                alt="아무거나"
              />
            ),
            title: "하하하",
            description: "하이하이",
            onClick: () => console.log("hi"),
          },
          {
            Thumbnail: <div>hihi</div>,
            title: "파파파",
            description: "파이파이",
            onClick: () => console.log("hi"),
          },
        ].map(({ Thumbnail, title, description, onClick }, i) => (
          <Card
            publishedAt="2023. 10. 16. "
            subCategoryLink={<Link to="react">react</Link>}
            key={i}
            title={title}
            Thumbnail={Thumbnail}
            description={description}
            onClick={onClick}
            boxShadow={false}
            className="card"
          />
        ))}
      </DragSlider>
    );

    // 첫 번째 카드의 title과 description 확인
    const firstCardTitle = screen.getByText("하하하", { selector: "h3" });
    const firstCardDescription = screen.getByText("하이하이", {
      selector: "div",
    });

    // 두 번째 카드의 title과 description 확인
    const secondCardTitle = screen.getByText("파파파", { selector: "h3" });
    const secondCardDescription = screen.getByText("파이파이", {
      selector: "div",
    });

    expect(firstCardTitle).toBeInTheDocument();
    expect(firstCardDescription).toBeInTheDocument();
    expect(secondCardTitle).toBeInTheDocument();
    expect(secondCardDescription).toBeInTheDocument();
  });

  it("Thumbnail Props에 이미지를 넣은 카드에 이미지가 출력되는지 확인", () => {
    render(
      <DragSlider>
        <div className="dragslider">
          {[
            {
              Thumbnail: (
                <img
                  width={240}
                  height={240}
                  src="https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100"
                  alt="아무거나"
                />
              ),
              title: "바바바",
              description: "하이하이",
              onClick: () => console.log("hi"),
            },
            {
              Thumbnail: <div>hihi</div>,
              title: "파파파",
              description: "하이하이",
              onClick: () => console.log("hi"),
            },
          ].map(({ Thumbnail, title, description, onClick }, i) => (
            <Card
              publishedAt="2023. 10. 16. "
              subCategoryLink={<Link to="react">react</Link>}
              key={i}
              title={title}
              Thumbnail={Thumbnail}
              description={description}
              onClick={onClick}
              boxShadow={false}
            />
          ))}
        </div>
      </DragSlider>
    );
    const firstCardImage = screen.getByRole("img", { name: "아무거나" });
    expect(firstCardImage).toBeInTheDocument();
  });

  it("Thumbnail Props에 div태그를 넣은 카드에 이미지가 출력되는지 확인", () => {
    render(
      <DragSlider className="dragslider">
        {[
          {
            Thumbnail: (
              <img
                width={240}
                height={240}
                src="https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100"
                alt="아무거나"
              />
            ),
            title: "바바바",
            description: "하이하이",
            onClick: () => console.log("hi"),
          },
          {
            Thumbnail: <div>hihi</div>,
            title: "파파파",
            description: "하이하이",
            onClick: () => console.log("hi"),
          },
        ].map(({ Thumbnail, title, description, onClick }, i) => (
          <Card
            publishedAt="2023. 10. 16. "
            subCategoryLink={<Link to="react">react</Link>}
            key={i}
            title={title}
            Thumbnail={Thumbnail}
            description={description}
            onClick={onClick}
            boxShadow={false}
          />
        ))}
      </DragSlider>
    );
    const secondCardDiv = screen.getByText("hihi");
    expect(secondCardDiv).toBeInTheDocument();
  });
});
