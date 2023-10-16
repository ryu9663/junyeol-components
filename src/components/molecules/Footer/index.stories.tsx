import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from ".";

const meta: Meta<typeof Footer> = {
  title: "molecules/Footer",
  component: Footer,
  decorators: [
    (Story) => (
      <main>
        <section
          style={{ background: "skyblue", padding: "30px", height: "120vh" }}
        ></section>
        <Story />
      </main>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <Footer />
      </>
    );
  },
};
