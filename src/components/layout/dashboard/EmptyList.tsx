import { LuListX } from "react-icons/lu";
import { Link } from "react-router";

function EmptyList() {
  return (
    <>
      <div className="flex items-center justify-center mt-7">
        <div className="flex flex-col items-center gap-4">
          <LuListX className="text-5xl text-gray-600" />
          <h2 className="text-gray-400 font-semibold text-lg">
            Empty transaction list
          </h2>
          <Link to="/create"
          className="text-sm font-semibold cursor-pointer text-white bg-indigo-600 py-2 px-3 rounded-lg hover:bg-indigo-500 transition hover:shadow-lg">
            New transaction
          </Link>
        </div>
      </div>
    </>
  );
}

export default EmptyList;
