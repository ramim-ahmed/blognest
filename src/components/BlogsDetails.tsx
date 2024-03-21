/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { addBlogs } from "../utils";
export default function BlogsDetails() {
  const [tabIndex, setTabIndex] = useState(0);

  const blog: any = useLoaderData();
  const {
    id,
    title,
    published_at,
    reading_time_minutes,
    public_reactions_count,
    comments_count,
  } = blog || {};

  const handleAddToBookMark = (blog: any) => {
    addBlogs(blog);
  };
  return (
    <div className="max-w-3xl px-6 py-16 mx-auto space-y-12 min-h-[calc(100vh-125px)]">
      <article className="space-y-8 text-[#0B0130]">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            {title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
            <div className="flex items-center md:space-x-2">
              <p className="text-sm">
                {reading_time_minutes} min read •{" "}
                {new Date(published_at).toLocaleDateString()}
              </p>
            </div>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
              {comments_count} comments • {public_reactions_count} views
            </p>
          </div>
          {/* tabs */}
          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap text-gray-100">
            <Link
              to={`/blog/${id}`}
              onClick={() => setTabIndex(0)}
              rel="noopener noreferrer"
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 0 ? "border border-b-0" : "border-b"
              } rounded-t-lg border-gray-400 text-black`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Content</span>
            </Link>
            <Link
              rel="noopener noreferrer"
              to={"author"}
              onClick={() => setTabIndex(1)}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 1 ? "border border-b-0" : "border-b"
              } rounded-t-lg border-gray-400 text-black`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Author</span>
            </Link>
            <div
              onClick={() => handleAddToBookMark(blog)}
              className="bg-[#00C2FF] rounded-full p-3 cursor-pointer hover:bg-sky-700"
            >
              <MdBookmarkAdd color="#ffffff" size={26} />
            </div>
          </div>
        </div>
      </article>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
