import { useQuery } from "@tanstack/react-query";
import { searchUsers } from "../../services/apiUser";

export function useSearchUser(query: string) {
  const { data: users, isLoading } = useQuery({
    queryKey: ["users", query],
    queryFn: () => searchUsers(query),
  });
  return { users, isLoading };
}
