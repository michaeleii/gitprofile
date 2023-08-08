import { useLoader } from "@tanstack/router";
import UserItem from "./UserItem";

import Item from "../../interfaces/Item";

function UserResults() {
  const users: Item[] = useLoader();

  if (!users.length) return null;

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:gird-cols-3 md:grid-cols-2">
      {users && users.map((user) => <UserItem key={user.id} user={user} />)}
    </div>
  );
}
export default UserResults;
