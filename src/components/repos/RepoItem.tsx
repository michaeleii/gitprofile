import GitHubRepository from "../../interfaces/GitHubRepository";
import { FaCodeBranch, FaEye, FaInfo, FaLink, FaStar } from "react-icons/fa";

function RepoItem({ repo }: { repo: GitHubRepository }) {
  return (
    <div className="rounded-md card bg-gray-800 hover:bg-gray-900">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={repo.html_url}>
            <FaLink className="inline mr-1" /> {repo.name}
          </a>
        </h3>
        <p className="mb-3">{repo.description}</p>
        <div className="space-x-2">
          <div className="badge badge-info badge-lg bg-info/20 text-info">
            <FaEye className="mr-2" /> {repo.watchers_count}
          </div>
          <div className="badge  badge-warning badge-lg bg-warning/20 text-warning">
            <FaStar className="mr-2" /> {repo.stargazers_count}
          </div>
          <div className="badge  badge-error badge-lg bg-error/20 text-error">
            <FaInfo className="mr-2" /> {repo.open_issues}
          </div>
          <div className="badge  badge-success badge-lg bg-success/20 text-success">
            <FaCodeBranch className="mr-2" /> {repo.forks}
          </div>
        </div>
      </div>
    </div>
  );
}
export default RepoItem;
