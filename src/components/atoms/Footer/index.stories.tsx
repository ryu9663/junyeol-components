import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from ".";

const meta: Meta<typeof Footer> = {
  title: "molecules/Footer",
  component: Footer,
  decorators: [
    (Story) => {
      return (
        <>
          <main
            style={{
              height: `${window.innerHeight - 24}px`,
              background: "green",
            }}
          >
            <section
              style={{
                height: "200px",
                width: "100%",
                background: "yellowgreen",
              }}
            >
              스크롤을 제일 아래로 내리면 푸터가 있어요
            </section>
            <section
              style={{ height: "300", width: "100%", background: "yellow" }}
            >
              스크롤을 제일 아래로 내리면 푸터가 있어요
            </section>
          </main>
          <Story />
        </>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => {
    return <Footer />;
  },
};
