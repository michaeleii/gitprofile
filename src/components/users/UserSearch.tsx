import { useLoader, useNavigate } from "@tanstack/router";
import { useState } from "react";
import User from "../../interfaces/Item";

function UserSearch() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const users: User[] = useLoader();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return alert("Please enter a search term.");
    navigate({ to: "/", search: { query } });
    setQuery("");
  };

  const clear = () => {
    navigate({ to: "/" });
    setQuery("");
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form className="form-control" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              name="query"
              className="w-full pr-40 bg-gray-200 input input-lg text-black"
              placeholder="Search for a user..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="absolute top-0 right-[-2px] rounded-l-none w-36 btn btn-lg">
              Go
            </button>
          </div>
        </form>
      </div>
      <div>
        {users.length > 0 && (
          <button className="btn btn-ghost btn-lg" onClick={clear}>
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
export default UserSearch;
