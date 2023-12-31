import { Link } from "@tanstack/router";
import User from "../../interfaces/Item";

function UserItem({ user: { login, avatar_url } }: { user: User }) {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt={`Profile image for ${login}`} />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            to={`/user/$login`}
            params={{ login }}
            className="text-base-content text-opacity-50"
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
export default UserItem;
