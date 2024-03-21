import { Link, NavLink } from "react-router-dom";
import ThemeController from "./ThemeController";

export default function Navbar() {
  return (
    <div className="navbar  bg-base-100 shadow sticky top-0 z-10">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost gap-0 text-[#00C2FF] text-2xl font-bold"
        >
          BlogNest
        </Link>
      </div>
      <div className="flex-none">
        <div className="menu menu-horizontal px-1 space-x-5">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#00C2FF] font-bold" : "font-bold"
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#00C2FF] font-bold" : "font-bold"
            }
            to="/blogs"
          >
            Blogs
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#00C2FF] font-bold" : "font-bold"
            }
            to="/bookmarks"
          >
            Bookmarks
          </NavLink>

          <ThemeController />
        </div>
      </div>
    </div>
  );
}
