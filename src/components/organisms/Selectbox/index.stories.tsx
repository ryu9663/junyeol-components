/* eslint-disable react-hooks/rules-of-hooks */
import { Selectbox } from "@/components/organisms/Selectbox";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
const meta: Meta<typeof Selectbox> = {
  title: "organisms/Selectbox",
  component: Selectbox,
  argTypes: {
    size: {
      control: {
        options: ["small", "normal", "large"],
        type: "select",
      },
    },
    fontSize: {
      control: {
        options: ["small", "normal", "large"],
        type: "select",
      },
    },
    fontWeight: {
      control: {
        options: [400, 500, 700],
        type: "select",
      },
    },
    upward: {
      control: {
        type: "boolean",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "300px", marginTop: "200px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Selectbox>;

export const Default: Story = {
  render: (args) => {
    const [selectedText, setSelectedText] = useState(20);

    return (
      <>
        <div>
          <Selectbox
            {...args}
            name={args.name || "관광지 검색 수"}
            size={args.size || "normal"}
            onChange={(value) => setSelectedText(value)}
            options={[
              { name: "10개", value: 10 },
              { name: "20개", value: 20 },
              { name: "30개", value: 30 },
              { name: "40개", value: 40 },
              { name: "50개", value: 50 },
            ]}
          />
          <div style={{ marginTop: "10px", textAlign: "center" }}>
            {selectedText}
          </div>
        </div>
      </>
    );
  },
};
