/* eslint-disable storybook/prefer-pascal-case */
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";
import { Link, MemoryRouter } from "react-router-dom";

const meta: Meta<typeof Card> = {
  title: "atoms/Card",
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ padding: "40px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],

  argTypes: {
    Thumbnail: {
      default: (
        <img
          width={180}
          height={120}
          src="https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100"
          alt="아무거나"
        />
      ),
      description: "JSX.Element",
    },
    description: {
      fontSize: {
        control: {
          type: "string",
          default: "normal",
          description: "small, normal, large",
        },
      },
      content: {
        control: {
          type: "string",
          default: "hihihihi",
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => {
    return (
      <MemoryRouter>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "760px",
          }}
        >
          <Card
            createdAt="2023. 10. 16. "
            subCategoryLink={<Link to="react">react</Link>}
            Thumbnail={
              <img
                width={180}
                height={120}
                src="https://junesdevlog-s3.s3.ap-northeast-2.amazonaws.com/portfolio_profile.png"
                alt="아무거나"
              />
            }
            title="프론트엔드 개발자 류준열 이력서ㄹㅁ;ㅐㅑ디ㅏ로ㅟㅏㄹㅇ누ㅠㅣㅏ무지다구2ㅣㅏㅈ둠ㅎㄴㄱㅇㅋ,ㅡ류춮ㅌ,ㅡㄴ디르미ㅏㅈㄷㅎ구이ㅏㅍ쿠 ㅣㅏㄷㅁㄴ"
            description={`안녕하세요. 프론트엔드 개발자 류준열입니다.

            현실의 문제를 해결할 수 있고, 더 나은 해결책을 제시할 수 있는 개발자가 되고자 합니다.
            
            감사합니다.`}
          />
        </div>
      </MemoryRouter>
    );
  },
};

export const 썸네일에_div태그_넣음: Story = {
  render: () => {
    return (
      <MemoryRouter>
        <Card
          createdAt="2023. 10. 16. "
          subCategoryLink={<Link to="react">react</Link>}
          Thumbnail={<div>hi</div>}
          title="Next App router에서 use client가 CSR을 뜻하지는 않는다."
          description={
            "분명히 서버컴포넌트로 렌더링되는건 아닌데,, use client를 사용하면 CSR로 된다는 뜻이 아닌가? 하고 공식문서를 보았다. 공식문서에서 클라이언트 컴포넌트 (use client) 가 어떻게 렌더링 되는지 잘 작성되어 있다."
          }
        />
      </MemoryRouter>
    );
  },
};

export const 카드_여러개: Story = {
  render: () => {
    return (
      <MemoryRouter>
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <Card
            createdAt="2023. 10. 16. "
            subCategoryLink={<Link to="react">react</Link>}
            Thumbnail={
              <img
                width={180}
                height={120}
                src="https://junesdevlog-s3.s3.ap-northeast-2.amazonaws.com/portfolio_profile.png"
                alt="아무거나"
              />
            }
            title="프론트엔드 개발자 류준열 이력서ㄹㅁ;ㅐㅑ디ㅏ로ㅟㅏㄹㅇ누ㅠㅣㅏ무지다구2ㅣㅏㅈ둠ㅎㄴㄱㅇㅋ,ㅡ류춮ㅌ,ㅡㄴ디르미ㅏㅈㄷㅎ구이ㅏㅍ쿠 ㅣㅏㄷㅁㄴ"
            description={`안녕하세요. 프론트엔드 개발자 류준열입니다.

            현실의 문제를 해결할 수 있고, 더 나은 해결책을 제시할 수 있는 개발자가 되고자 합니다.
            
            감사합니다.`}
          />
          <Card
            createdAt="2023. 10. 16. "
            subCategoryLink={<Link to="react">react</Link>}
            Thumbnail={
              <img
                width={180}
                height={120}
                src="https://www.datocms-assets.com/107137/1696908548-2023-10-10-12-28-59.png"
                alt="아무거나"
              />
            }
            title="Next App router에서 use client가 CSR을 뜻하지는 않는다."
            description={
              "분명히 서버컴포넌트로 렌더링되는건 아닌데,,alksdjfklasdjglkasdjflkㅏㅣ@@@@@@@@@@@@@ㄱ3ㅏㄷㄹ미ㅓ캬ㅐㅣㅏ3ㅡㅁㄱㄴㄸㄹㅋㅌ이ㅏ류ㅡ파ㅣㅂ323ㅈ믑기ㅏㅁ@ㅣㅏ@@@@#%ㅆ$ㄲㅎㄴ류ㅖㅑㅣㅏㅜ use client를 사용하면 CSR로 된다는 뜻이 아닌가? 하고 공식문서를 보았다. 공식문서에서 클라이언트 컴포넌트 (use client) 가 어떻게 렌더링 되는지 잘 작성되어 있다."
            }
          />

          <Card
            createdAt="2023. 10. 16. "
            subCategoryLink={<Link to="react">react</Link>}
            Thumbnail={
              <img
                width={180}
                height={120}
                src="https://webudding.com/_next/image/?url=https%3A%2F%2Fd29hudvzbgrxww.cloudfront.net%2Fpublic%2Fproduct%2F20220905144129-ee57741b-6057-4a1a-8531-8e6dcb6315f7.jpg&w=3840&q=100"
                alt="아무거나"
              />
            }
            title="Next App router에서 use client가 CSR을 뜻하지는 않는다."
            description={
              "ㅣ만오하ㅣㅓ어롸ㅣㅎㅁ저ㅟㅏㄷㅎㄱㄴ울큩차ㅣ프3점ㅅ대ㅑㅎㄱㅇㄴㅋ리ㅠㅏ츹.ㅍ, 재ㅑ머3딘랑흨륱,ㅊㅍ .분명히 서버컴포넌트로 렌더링되는건 아닌데,, use client를 사용하면 CSR로 된다는 뜻이 아닌가? 하고 공식문서를 보았다. 공식문서에서 클라이언트 컴포넌트 (use client) 가 어떻게 렌더링 되는지 잘 작성되어 있다."
            }
          />
        </div>
      </MemoryRouter>
    );
  },
};
