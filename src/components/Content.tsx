/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoaderData } from "react-router-dom";
import placeHolderImg from "../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Content() {
  const blog: any = useLoaderData();
  const { cover_image, tags, url, title, body_html } = blog || {};
  return (
    <div className="mx-auto overflow-hidden transition border-2 p-2  border-opacity-30   group hover:no-underline focus:no-underline ">
      <img
        className="object-cover w-full rounded h-44 "
        src={cover_image || placeHolderImg}
      />
      <div>
        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed ">
          {tags &&
            tags.map((tag: string) => (
              <a
                key={tag}
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-sm hover:underline "
              >
                #{tag}
              </a>
            ))}
        </div>
      </div>
      <div className="space-y-2">
        <a
          target="_blank"
          href={url}
          className="text-2xl font-semibold group-hover:underline group-focus:underline"
        >
          {title}
        </a>

        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
    </div>
  );
}
