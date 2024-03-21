import { NavLink } from "react-router-dom";
import ThemeController from "./ThemeController";

export default function Navbar() {
  return (
    <div className="navbar  bg-base-100 shadow sticky top-0">
      <div className="flex-1">
        <a className="btn btn-ghost gap-0 text-[#00C2FF] text-2xl font-bold">
          BlogNest
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 space-x-5">
          <li>
            <NavLink className="font-bold" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="font-bold" to="/blogs">
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink className="font-bold" to="/bookmarks">
              Bookmarks
            </NavLink>
          </li>
          <li>
            <ThemeController />
          </li>
        </ul>
      </div>
    </div>
  );
}
