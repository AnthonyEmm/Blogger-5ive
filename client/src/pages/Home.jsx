import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import BlogCard from "../components/BlogCard";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(`/api/blog/getblogs`);
      const data = await res.json();
      setBlogs(data.blogs);
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-6xl">
          Welcome to <span className="text-orange-400">Blogger 5ive&copy;</span>
        </h1>
        <p className="text-gray-300 text-sm">
          Blogger 5ive is a blog platform to share amazing informative and
          intuitive blogs. Join us to search and read interesting blog articles.
        </p>
        <Link
          to="/search"
          className="text-sm sm:text-sm text-cyan-400 font-bold hover:underline"
        >
          View all blogs
        </Link>
      </div>
      <div className="p-3 bg-cyan-800 dark:bg-slate-800">
        <CallToAction />
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {blogs && blogs.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center text-gray-300">
              Most Recent Blogs
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-cyan-400 hover:underline text-center"
            >
              View all blogs
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
