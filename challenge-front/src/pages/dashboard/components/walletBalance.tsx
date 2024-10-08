import { RelayEnvironment } from "@/RelayEnvironment";
import { User, UserData } from "@/types/user";
import { Loader2 } from "lucide-react";
import { memo } from "react";
import { graphql, QueryRenderer } from "react-relay";

interface WalletBalanceProps {
  user: User;
}

const WalletBalance = ({ user }: WalletBalanceProps) => {
  return (
    <QueryRenderer
      variables={{ id: user.id }}
      environment={RelayEnvironment}
      query={graphql`
        query walletBalanceQuery($id: ID!) {
          user(id: $id) {
            id
            name
            email
            wallet {
              id
              balance
            }
          }
        }
      `}
      render={({ error, props }) => {
        if (error) {
          return (
            <div className="flex flex-col">
              <span className="text-zinc-600 text-sm">Balance</span>
              <span className="text-zinc-600 text-base font-semibold">
                {parseFloat(user.wallet.balance).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
          );
        } else if (!props) {
          return (
            <div className="flex justify-center items-center">
              <Loader2 className="mr-2 h-8 w-8 animate-spin text-secondary" />
            </div>
          );
        } else {
          const usersData = props as UserData;

          if (usersData.user.wallet.balance) {
            const balance = usersData.user.wallet.balance;
            return (
              <div className="flex flex-col">
                <span className="text-zinc-600 text-sm">Balance</span>
                <span className="text-zinc-600 text-base font-semibold">
                  {parseFloat(balance).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
            );
          }
        }
      }}
    />
  );
};

export default memo(WalletBalance);
