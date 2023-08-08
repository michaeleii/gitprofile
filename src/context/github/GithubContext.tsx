// import { createContext, useContext } from "react";
// import { useUsers } from "../../hooks/user/useUsers";
// import User from "../../interfaces/User";
// import { useSearchUser } from "../../hooks/user/useSearchUser";

// interface GithubContextType {
//   users: User[] | undefined;
//   isLoading: boolean;
// }

// const GithubContext = createContext<GithubContextType | null>(null);

// function GithubProvider({ children }: { children: React.ReactNode }) {
//   const { users, isLoading } = useSearchUser();
//   return (
//     <GithubContext.Provider value={{ users, isLoading }}>
//       {children}
//     </GithubContext.Provider>
//   );
// }

// function useGithub() {
//   const githubContext = useContext(GithubContext);
//   if (!githubContext) {
//     throw new Error("useGithub must be used within a GithubProvider");
//   }
//   return githubContext;
// }

// export default GithubProvider;
// export { useGithub };
