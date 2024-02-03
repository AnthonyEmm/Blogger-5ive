import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="group relative w-full border border-cyan-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all">
      <Link to={`/blog/${blog.slug}`}>
        <img
          src={blog.image}
          alt={blog.slug}
          className="h-[300px] 
          w-full object-cover group-hover:h-[180px] transition-all duration-300 z-20"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2">{blog.title}</p>
        <span className="italic text-sm">{blog.category}</span>
        <Link
          to={`/blog/${blog.slug}`}
          className="z-10 group-hover:bottom-0 absolute bottom-[-280px] 
          left-0 right-0 
          border border-cyan-300 text-cyan-200 hover:bg-cyan-500 hover:text-gray-900 dark:text-gray-200
          transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
        >
          Read blog
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
