/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/BlogCard";
import EmptyState from "@/components/EmptyState";
import { deleteBlog, getBlogs } from "@/utils";
import { useEffect, useState } from "react";

export default function BookMarks() {
  const [bookMarks, setBookMarks] = useState([]);
  useEffect(() => {
    const getBookMarks = getBlogs();
    setBookMarks(getBookMarks);
  }, []);
  if (!bookMarks.length) {
    return (
      <EmptyState
        message="No Bookmarks Found"
        address="/blogs"
        label="Browse Blogs"
      />
    );
  }
  const handleDeleteBlog = (id: any) => {
    deleteBlog(id);
    const blogs = getBlogs();
    setBookMarks(blogs);
  };
  return (
    <div className="px-6 min-h-[calc(100vh-116px)] flex justify-center items-center">
      <div className="grid grid-cols-3 gap-6 mt-4 px-20">
        {bookMarks.map((blog: any) => (
          <BlogCard
            isBookMark
            key={blog.id}
            blog={blog}
            handleDeleteBlog={handleDeleteBlog}
          />
        ))}
      </div>
    </div>
  );
}
