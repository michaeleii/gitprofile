import GitHubRepository from "../interfaces/GitHubRepository";
import GitHubUser from "../interfaces/GithubUser";
import Item from "../interfaces/Item";

export async function searchUsers(query: string) {
  const params = new URLSearchParams({
    q: query,
  });
  const res = await fetch(
    `${import.meta.env.VITE_GH_API_URL}/search/users?${params}`,
    {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GH_TOKEN}`,
      },
    }
  );

  const { items }: { items: Item[] } = await res.json();
  return items;
}

export async function fetchUser(login: string) {
  const res = await fetch(`${import.meta.env.VITE_GH_API_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_GH_TOKEN}`,
    },
  });
  if (!res.ok) throw new Error("User not found");
  const user: GitHubUser = await res.json();
  return user;
}

export async function fetchUserRepos(login: string) {
  const params = new URLSearchParams({
    sort: "created",
    per_page: "10",
  });
  const res = await fetch(
    `${import.meta.env.VITE_GH_API_URL}/users/${login}/repos?${params}`,
    {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GH_TOKEN}`,
      },
    }
  );
  if (!res.ok) throw new Error("User not found");
  const data: GitHubRepository[] = await res.json();
  return data;
}
