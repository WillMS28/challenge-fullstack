import { fetchQuery, graphql } from "relay-runtime";
import RelayModernEnvironment from "relay-runtime/lib/store/RelayModernEnvironment";
import { getUserRelayQuery } from "./__generated__/getUserRelayQuery.graphql";

export const getUserRelay = async (
  // setUser: React.Dispatch<React.SetStateAction<User>>,
  environment: RelayModernEnvironment,
  id: string
) => {
  try {
    await fetchQuery<getUserRelayQuery>(
      environment,
      graphql`
        query getUserRelayQuery($id: ID!) {
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
      `,
      {
        id: id,
      }
    )
      .toPromise()
      .then(() => {
        //  setUser(res.user);
      });
  } catch (error) {
    console.error("Failed to refresh transactions:", error);
  }
};
