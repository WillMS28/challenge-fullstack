import { ScrollArea } from "@/components/ui/scroll-area";
import { UserCardLogin } from "@/pages/login/components/userCardLogin";
import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof UserCardLogin> = {
  title: "Login/UserCardLogin",
  component: UserCardLogin,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div className="flex flex-col items-center rounded-md border h-80 py-3 min-w-64 w-full max-md:w-full max-w-[480px]">
         
          <div className="w-full">
            <ScrollArea className="h-64 ">
              <div className="gap-2 flex flex-col rounded-lg">
                <Story />
              </div>
            </ScrollArea>
          </div>
        </div>
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof UserCardLogin>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      id: "1",
      name: "William Miranda",
      email: "github.com/WillMS28",
      wallet: {
        id: "1",
        balance: "100",
        transactions: [],
      },
    },
  },
};
