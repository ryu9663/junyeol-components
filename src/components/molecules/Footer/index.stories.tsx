import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from ".";

const meta: Meta<typeof Footer> = {
  title: "molecules/Footer",
  component: Footer,
  decorators: [(Story) => <Story />],
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
