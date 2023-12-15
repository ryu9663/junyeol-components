/* eslint-disable react-hooks/rules-of-hooks */
import { Options } from "@/components/atoms/Options";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Options> = {
  title: "atoms/Options",
  component: Options,
  decorators: [
    (Story) => (
      <div style={{ padding: "150px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Options>;

export const Default: Story = {
  render: () => {
    const [selectedText, setSelectedText] = useState("");
    return (
      <>
        <div style={{ width: "300px", height: "300px", position: "relative" }}>
          <Options
            onMouseDown={(e) => e.preventDefault()}
            options={[
              { name: "사과", value: "apple" },
              { name: "포도", value: "graph" },
              {
                name: "리스트네임이다",
                value: "list name",
              },
            ]}
            handleClickOption={(value) => setSelectedText(value)}
          />
        </div>

        <div>{`선택된 값: ${selectedText}`}</div>
      </>
    );
  },
};
