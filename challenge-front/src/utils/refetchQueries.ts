import { User } from "@/types/user";
import { fetchQuery, graphql } from "relay-runtime";
import RelayModernEnvironment from "relay-runtime/lib/store/RelayModernEnvironment";
import { refetchQueriesQuery } from "./__generated__/refetchQueriesQuery.graphql";

interface refetchQueriesProps {
  user: User ;
  environment: RelayModernEnvironment;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const RefetchQueries = async ({
  user,
  environment,
  setUser,
}: refetchQueriesProps) => {
  if (user) {
    try {
      await fetchQuery<refetchQueriesQuery>(
        environment,
        graphql`
          query refetchQueriesQuery($id: ID!) {
            wallet(id: $id) {
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
        `,
        {
          id: user.wallet.id,
        }
      )
        .toPromise()
        .then((res) => {
          setUser((prevState) => ({
            ...prevState,
            wallet: {
              ...prevState.wallet,
              balance: res.wallet.balance,
            },
          }));
        });
    } catch (error) {
      console.error("Failed to refresh transactions:", error);
    }
  }
};
