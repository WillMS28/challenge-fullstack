import { graphql, useMutation } from "react-relay";
import { Wallet } from "@/types/wallet";
import { useCreateUserMutation } from "./__generated__/useCreateUserMutation.graphql";

export interface CreateUserData {
  createUser: {
    id: string;
    name: string;
    email: string;
    wallet: Wallet;
  };
}

export const useCreateUser = () => {
  return useMutation<useCreateUserMutation>(graphql`
    mutation useCreateUserMutation($name: String!, $email: String!) {
      createUser(name: $name, email: $email) {
        id
        name
        email
        wallet {
          id
          balance
        }
      }
    }
  `);
};
