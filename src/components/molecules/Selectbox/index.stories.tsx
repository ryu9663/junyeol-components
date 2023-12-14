/* eslint-disable react-hooks/rules-of-hooks */
import { OptionType } from "@/components/atoms/Options";
import { Selectbox } from "@/components/molecules/Selectbox";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Selectbox> = {
  title: "molecules/Selectbox",
  component: Selectbox,
  argTypes: {
    size: {
      control: {
        options: ["small", "medium", "large"],
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
      <div style={{ padding: "150px" }}>
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
    const [selectedText, setSelectedText] =
      useState<OptionType["value"]>("selectbox에서 선택한 값");
    console.log(args);
    return (
      <>
        <div>
          <Selectbox
            {...args}
            name={args.name || "셀렉트박스 이름"}
            options={[
              { name: "사과", value: "apple" },
              { name: "포도", value: "graph" },
              {
                name: "리스트네임이다",
                value: "list name",
              },
            ]}
            onChange={(value) => setSelectedText(value)}
          />

          <div style={{ marginTop: "10px", textAlign: "center" }}>
            {selectedText}
          </div>
        </div>
      </>
    );
  },
};
