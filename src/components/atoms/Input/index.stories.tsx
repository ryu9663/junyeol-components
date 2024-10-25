/* eslint-disable react-hooks/rules-of-hooks */
import { Input } from "@/components/atoms/Input";
import type { Meta, StoryObj } from "@storybook/react";
import { useState as createState } from "react";

const meta: Meta<typeof Input> = {
  title: "atoms/Input",
  component: Input,
  argTypes: {
    type: {
      control: {
        options: ["text", "password", "search", "tel", "email", "number"],
        type: "select",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
    fontSize: {
      control: {
        options: ["small", "medium", "large"],
        type: "select",
      },
    },
    fontWeight: {
      control: {
        options: [400, 500, 700],
        type: "select",
      },
    },
  },
  decorators: [(Story) => <Story />],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => {
    const [text, setText] = createState("");
    return (
      <div style={{ display: "flex", gap: "100px" }}>
        <Input
          type={args.type || "text"}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder={args.placeholder || "placeholder"}
          validation={(value) =>
            String(value).length > 5 ? "5글자 이하로 입력해주세요" : ""
          }
          {...args}
        />
        <div>validation: 5글자 이상 입력 못함</div>
      </div>
    );
  },
};

export const WithLabel: Story = {
  render: (args) => {
    const [text, setText] = createState("");
    return (
      <div style={{ display: "flex", gap: "100px" }}>
        <Input
          label={{
            htmlFor: "text",
            name: "label text",
          }}
          type={args.type || "text"}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder={args.placeholder || "placeholder"}
          validation={(value) =>
            String(value).length > 5 ? "5글자 이하로 입력해주세요" : ""
          }
        />
        <div>validation: 5글자 이상 입력 못함</div>
      </div>
    );
  },
};
