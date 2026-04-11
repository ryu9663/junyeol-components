/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { SegmentedControl, SegmentedControlProps } from ".";
import { useState } from "react";

type Args = SegmentedControlProps<string> & { disabledValues?: string[] };

const meta: Meta<Args> = {
  title: "atoms/SegmentedControl",
  component: SegmentedControl,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  args: {
    size: "medium",
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<Args>;

export const Period: Story = {
  argTypes: {
    disabledValues: {
      name: "disabled options",
      control: { type: "check" },
      options: ["daily", "weekly", "monthly"],
    },
  },
  args: { disabledValues: [] },
  render: ({ disabledValues = [], ...args }) => {
    const [period, setPeriod] = useState("daily");
    const options = [
      { label: "일간", value: "daily" },
      { label: "주간", value: "weekly" },
      { label: "월간", value: "monthly" },
    ].map((opt) => ({ ...opt, disabled: disabledValues.includes(opt.value) }));
    return (
      <SegmentedControl {...args} options={options} value={period} onChange={setPeriod} />
    );
  },
};

export const ViewMode: Story = {
  argTypes: {
    disabledValues: {
      name: "disabled options",
      control: { type: "check" },
      options: ["list", "grid"],
    },
  },
  args: { disabledValues: [] },
  render: ({ disabledValues = [], ...args }) => {
    const [viewMode, setViewMode] = useState("list");
    const options = [
      { label: "리스트", value: "list" },
      { label: "그리드", value: "grid" },
    ].map((opt) => ({ ...opt, disabled: disabledValues.includes(opt.value) }));
    return (
      <SegmentedControl {...args} options={options} value={viewMode} onChange={setViewMode} />
    );
  },
};

export const Filter: Story = {
  argTypes: {
    disabledValues: {
      name: "disabled options",
      control: { type: "check" },
      options: ["all", "active", "done"],
    },
  },
  args: { disabledValues: [] },
  render: ({ disabledValues = [], ...args }) => {
    const [filter, setFilter] = useState("all");
    const options = [
      { label: "전체", value: "all" },
      { label: "진행중", value: "active" },
      { label: "완료", value: "done" },
    ].map((opt) => ({ ...opt, disabled: disabledValues.includes(opt.value) }));
    return (
      <SegmentedControl {...args} options={options} value={filter} onChange={setFilter} />
    );
  },
};
