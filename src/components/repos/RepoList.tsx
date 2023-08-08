import GitHubRepository from "../../interfaces/GitHubRepository";
import RepoItem from "./RepoItem";

function RepoList({ repos }: { repos: GitHubRepository[] }) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Repositories
        </h2>
        <div className="space-y-5">
          {repos.map((repo) => (
            <RepoItem key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default RepoList;
