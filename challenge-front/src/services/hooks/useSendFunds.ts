import { graphql, useMutation } from "react-relay";
import { useSendFundsMutation } from "./__generated__/useSendFundsMutation.graphql";

export const useSendFunds = () => {
  return useMutation<useSendFundsMutation>(graphql`
    mutation useSendFundsMutation(
      $fromWalletId: ID!
      $toWalletId: ID!
      $amount: String!
    ) {
      sendFunds(
        fromWalletId: $fromWalletId
        toWalletId: $toWalletId
        amount: $amount
      ) {
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
  `);
};
