import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-125px)]">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold">
          Welcome to{" "}
          <span className="text-5xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">
            BlogNest
          </span>
        </h1>
        <p className="text-base">
          share your knowledge that help more poeple capture this post
        </p>
        <div className="space-x-4">
          <Link
            to="/blogs"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#00C2FF] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">
              Read Blogs
            </span>
          </Link>
          <Link
            to="/bookmarks"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#0B0130] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">
              Bookmarks
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
