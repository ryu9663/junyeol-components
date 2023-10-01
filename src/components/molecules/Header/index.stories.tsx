/* eslint-disable react-hooks/rules-of-hooks */

import type { Meta, StoryObj } from "@storybook/react";
import { Header } from ".";
import { Link, MemoryRouter } from "react-router-dom";
import { Button } from "@/index";

const meta: Meta<typeof Header> = {
  title: "molecules/Header",
  component: Header,
  decorators: [
    (Story) => (
      <div style={{ height: "100vh", width: "100%", background: "skyblue" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => {
    return (
      <MemoryRouter>
        <Header>
          {[
            { link: "https://www.naver.com", children: "자기소개" },
            { link: "https://www.daum.net", children: "이력" },
            { link: "https://www.kakao.com", children: "했던 일" },
          ].map((button, i) => {
            return (
              <Link key={i} to={button.link}>
                <Button>{button.children}</Button>
              </Link>
            );
          })}
        </Header>
      </MemoryRouter>
    );
  },
};
