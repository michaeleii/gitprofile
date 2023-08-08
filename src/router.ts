import { Route, Router } from "@tanstack/router";
import { RootRoute } from "@tanstack/router";
import App from "./App";
import * as z from "zod";
import { fetchUser, fetchUserRepos, searchUsers } from "./services/apiUser";
import Home from "./pages/Home";
import About from "./pages/About";
import UserDetails from "./pages/UserDetails";
import NotFound from "./pages/NotFound";

const userSearchSchema = z.object({
  query: z.string().catch(""),
});

export type UserSearch = z.infer<typeof userSearchSchema>;

const rootRoute = new RootRoute({
  component: App,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
  validateSearch: userSearchSchema,
  getKey: ({ search: { query } }) => query,
  loader: async ({ search: { query } }) => {
    const users = await searchUsers(query);
    return users;
  },
});

const userRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "user/$login",
  component: UserDetails,
  loader: async ({ params: { login } }) => {
    const user = await fetchUser(login);
    const repos = await fetchUserRepos(login);
    return { user, repos };
  },
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "about",
  component: About,
});

const NotFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "*",
  component: NotFound,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  userRoute,
  aboutRoute,
  NotFoundRoute,
]);

const router = new Router({ routeTree });

declare module "@tanstack/router" {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router;
  }
}

export default router;
