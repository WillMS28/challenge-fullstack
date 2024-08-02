import { ScrollArea } from "@/components/ui/scroll-area";
import { CardUserToTransfer } from "./cardUserToTransfer";
import { graphql, QueryRenderer } from "react-relay";
import { RelayEnvironment } from "@/RelayEnvironment";
import { Loader2 } from "lucide-react";
import { User } from "@/types/user";

interface userListProps {
  myUser: User;
  refetch: () => void;
}

interface UsersData {
  users: User[];
}

export const UserListToTransfer = ({ myUser, refetch }: userListProps) => {
  return (
    <div className=" flex flex-col items-center w-1/2 max-md:w-full">
      <h3 className="text-lg font-semibold truncate text-white">
        Transfer to:
      </h3>

      <QueryRenderer
        variables={{}}
        environment={RelayEnvironment}
        query={graphql`
          query usersListToTransferQuery {
            users {
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
          const usersData = props as UsersData;

          if (error) {
            return <div>Error! {error.message}</div>;
          } else if (!props) {
            return (
              <div className="flex justify-center items-center">
                <Loader2 className="mr-2 h-8 w-8 animate-spin text-secondary" />
              </div>
            );
          } else {
            return (
              <ScrollArea className="flex flex-col gap-2 w-full max-h-[530px] p-2">
                {usersData.users.map((user) => {
                  if (user.id !== myUser.id)
                    return (
                      <CardUserToTransfer
                        userToTransfer={user}
                        currentUser={myUser}
                        refetch={refetch}
                        key={user.id}
                      />
                    );
                })}
              </ScrollArea>
            );
          }
        }}
      />
    </div>
  );
};
