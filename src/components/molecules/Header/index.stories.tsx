import type { Meta, StoryObj } from "@storybook/react";
import { Header } from ".";
import { Button } from "@/index";
import styles from "./stories.module.scss";

const meta: Meta<typeof Header> = {
  title: "molecules/Header",
  component: Header,
  decorators: [
    (Story) => (
      <div style={{ width: "100%", height: "100px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => {
    return (
      <Header>
        {[
          { link: "https://portfolio.wnsdufdl.com/", children: "포트폴리오" },
          {
            link: "https://www.notion.so/41daf0a85b9f46d186114573d2781a78",
            children: "이력서",
          },
          { link: "https://www.wnsdufdl.com/", children: "블로그" },
        ].map((button, i) => {
          return (
            <a key={i} href={button.link} target="_blank">
              <Button border={false} size="normal" className={styles.button}>
                {button.children}
              </Button>
            </a>
          );
        })}
      </Header>
    );
  },
};
