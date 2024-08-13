import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { RelayEnvironmentProvider } from "react-relay";
import { RelayEnvironment } from "@/RelayEnvironment"; // Certifique-se de importar o RelayEnvironment correto
import { User } from "@/types/user";
import { Wallet } from "@/pages/dashboard/components/wallet";

const mockUser: User = {
  id: "1",
  name: "William Miranda",
  email: "william@example.com",
  wallet: {
    id: "wallet1",
    balance: "200",
    transactions: [],
  },
};

const meta: Meta<typeof Wallet> = {
  title: "Dashboard/Wallet",
  component: Wallet,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <BrowserRouter>
          <div className="flex flex-col relative w-[90%] h-[90%] max-md:min-h-[80%] max-md:h-auto max-w-[1280px] space-y-6 shadow-lg bg-primary bg-opacity-80 rounded-lg backdrop-blur-sm p-6">
            <Story />
          </div>
        </BrowserRouter>
      </RelayEnvironmentProvider>
    ),
  ],
} satisfies Meta<typeof Wallet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    closeAndBackToLogin: () => alert("Logged out"),
    user: mockUser,
    refetchQueries: () => console.log("Refetching queries..."),
  },
};
