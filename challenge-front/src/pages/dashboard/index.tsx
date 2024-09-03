import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { graphql } from "relay-runtime";
import { useLazyLoadQuery, useRelayEnvironment } from "react-relay";

import { Separator } from "@/components/ui/separator";
import { UserListToTransfer } from "./components/usersListToTransfer";

import { TransactionsList } from "./components/TransactionsList";
import { User } from "@/types/user";

import { Wallet } from "./components/wallet";
import { dashboardQuery } from "./__generated__/dashboardQuery.graphql";
import { RefetchQueries } from "@/utils/refetchQueries";

export const DashboardPage = () => {
  const environment = useRelayEnvironment();
  const [user, setUser] = useState<User>({} as User);

  const navigate = useNavigate();
  const location = useLocation();

  const data = useLazyLoadQuery<dashboardQuery>(
    graphql`
      query dashboardQuery($id: ID!) {
        user(id: $id) {
          id
          ...TransactionsList_user
          wallet {
            id
            balance
            transactions {
              id
              fromWallet
              toWallet
              amount
              date
              sender {
                id
                name
              }
              receiver {
                id
                name
              }
            }
          }
        }
      }
    `,
    { id: location.state.id }
  );

  const closeAndBackToLogin = () => {
    localStorage.removeItem("user");
    setUser({} as User);

    navigate("/");
  };

  const handleRefetchQueries = () => {
    if (user) {
      RefetchQueries({
        environment,
        setUser,
        user,
      });
    }
  };

  useEffect(() => {
    if (location.state.id) {
      setUser(location.state);
    }
    //getUserRelay(setUser, environment, user?.id ? user?.id : "");
  }, [location.state, user?.id]);

  return (
    <div className="flex flex-col relative w-[90%] h-[90%] max-md:min-h-[80%] max-md:h-auto max-w-[1280px] space-y-6 shadow-lg bg-primary bg-opacity-80 rounded-lg backdrop-blur-sm p-6">
      <Wallet
        closeAndBackToLogin={closeAndBackToLogin}
        refetchQueries={handleRefetchQueries}
        user={user}
      />

      <Separator />

      <div className="flex justify-between h-full max-md:flex-col gap-4">
        <TransactionsList user={data.user} />
        <Separator orientation="vertical" />

        {user && (
          <UserListToTransfer myUser={user} refetch={handleRefetchQueries} />
        )}
      </div>
    </div>
  );
};
