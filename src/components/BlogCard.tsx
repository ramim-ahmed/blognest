/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { TbTrashXFilled } from "react-icons/tb";
export default function BlogCard({ blog, isBookMark, handleDeleteBlog }: any) {
  const { id, title, description, cover_image, published_at } = blog || {};
  return (
    <div className=" flex relative">
      <Link
        rel="noopener noreferrer"
        to={`/blog/${id}`}
        className="group hover:no-underline focus:no-underline text-[#0B0130]  hover:scale-105 duration-300 p-2 border-2 border-[#00C2FF] bg-white"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {isBookMark && (
        <div
          onClick={() => handleDeleteBlog(id)}
          className="absolute -top-3 -right-3 bg-red-500 p-3 rounded-full hover:bg-red-800 cursor-pointer"
        >
          <TbTrashXFilled size={26} color="#ffffff" />
        </div>
      )}
    </div>
  );
}
