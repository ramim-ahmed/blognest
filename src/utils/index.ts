/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import toast from "react-hot-toast";

export const getBlogs = () => {
  let blogs: any[] = [];
  const isBlogs = localStorage.getItem("blogs");
  if (isBlogs) {
    return JSON.parse(isBlogs);
  }
  return blogs;
};

export const addBlogs = (blog: any) => {
  const blogs = getBlogs();
  const isExits = blogs.find((blogItem: any) => blogItem?.id === blog?.id);
  if (isExits) {
    return toast.error("Blog already exits in bookmarks!");
  }
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  toast.success("Blog is addeded in bookmark.");
};

export const deleteBlog = (id: any) => {
  const blogs = getBlogs();
  const afterDeleteBlogs = blogs.filter(
    (blogItem: { id: any }) => blogItem.id !== id
  );
  localStorage.setItem("blogs", JSON.stringify(afterDeleteBlogs));
  toast.success("Blog is deleted from bookmark!!");
};
