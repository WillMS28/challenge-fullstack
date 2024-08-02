import { graphql, useMutation } from "react-relay";
import { useAddFundsMutation } from "./__generated__/useAddFundsMutation.graphql";

export const useAddFunds = () => {
  return useMutation<useAddFundsMutation>(graphql`
    mutation useAddFundsMutation($walletId: ID!, $amount: String!) {
      addFundsToWallet(walletId: $walletId, amount: $amount) {
        id
        balance
      }
    }
  `);
};
