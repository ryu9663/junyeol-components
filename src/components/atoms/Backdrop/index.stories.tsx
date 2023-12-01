/* eslint-disable storybook/prefer-pascal-case */
/* eslint-disable react-hooks/rules-of-hooks */
import { Backdrop } from "@/components/atoms/Backdrop";
import { Button } from "@/index";
import type { Meta, StoryObj } from "@storybook/react";
import styles from "./stories.module.scss";
import { useState } from "react";

const meta: Meta<typeof Backdrop> = {
  title: "atoms/Backdrop",
  component: Backdrop,
  argTypes: {
    type: {
      options: ["blur", "transparent", "shadow"],
      control: { type: "select" },
      defaultValue: "blur",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <main style={{ height: "40vh", width: "100vw" }}>
        <Story />
      </main>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Backdrop>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Backdrop
          isOpen={isOpen}
          type={args.type || "blur"}
          onClose={() => setIsOpen(false)}
        >
          <div style={{ width: "400px", height: "400px", background: "green" }}>
            modalbody
          </div>
        </Backdrop>

        <Button onClick={() => setIsOpen(!isOpen)}>모달버튼</Button>
        <div style={{ width: "400px", height: "400px", background: "yellow" }}>
          이건그냥 배경
        </div>
      </>
    );
  },
};

export const 모달이아닌경우: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <div>
          <Backdrop
            isOpen={isOpen}
            className={`${styles.backdrop2} ${isOpen ? styles.open : ""}`}
            onClose={() => setIsOpen(false)}
            type={args.type || "blur"}
          />

          <div
            className={`${styles.sidebar} ${isOpen ? styles.open : ""} ${
              styles["priority-1"]
            }`}
          >
            side bar 클릭해도 사이드바는 안꺼져야함. 이녀석도 라이브러리화 하자.
          </div>
        </div>

        <Button
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          side bar button
        </Button>
        <Button
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
          }}
          onClick={() => console.log("hi")}
        >
          백드롭있으면 이 버튼 눌렀을때 콘솔 안찍혀야함 애니메이션 넣으려면
          외부클래스..
        </Button>
      </>
    );
  },
};
