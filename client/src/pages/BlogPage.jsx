import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Spinner } from "flowbite-react";
import CallToAction from "../components/CallToAction";

const BlogPage = () => {
  const { blogSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/blog/getblogs?slug=${blogSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setBlog(data.blogs[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchBlog();
  }, [blogSlug]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );

  return (
    <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl mt-10 p-3 text-center max-w-2xl mx-auto lg:text-4xl">
        {blog && blog.title}
      </h1>
      <Link
        to={`/search?category=${blog && blog.category}`}
        className="self-center mt-5"
      >
        <Button color="gray" pill size="xs">
          {blog && blog.category}
        </Button>
      </Link>

      <img
        src={blog && blog.image}
        alt={blog && blog.title}
        className="mt-10 p-3 max-h-[600px] w-full object-cover"
      />

      <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
        <span>{blog && new Date(blog.createdAt).toLocaleDateString()}</span>
        <span className="italic">
          {blog && (blog.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>

      <div
        className="p-3 mx-w-2xl mx-auto w-full post-content"
        dangerouslySetInnerHTML={{ __html: blog && blog.content }}
      ></div>

      <div className="max-w-4xl mx-auto w-full">
        <CallToAction />
      </div>
    </main>
  );
};

export default BlogPage;
