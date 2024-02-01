import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const DashBlogs = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [userBlogs, setUserBlogs] = useState([]);

  console.log(userBlogs);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`/api/blog/getblogs?userId=${currentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setUserBlogs(data.blogs);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (currentUser.isAdmin) {
      fetchBlogs();
    }
  }, [currentUser._id]);

  return (
    <div
      className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-600 scrollbar-thumb-slate-300
     dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500"
    >
      {currentUser.isAdmin && userBlogs.length > 0 ? (
        <>
          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell>Date Updated</Table.HeadCell>
              <Table.HeadCell>Blog Image</Table.HeadCell>
              <Table.HeadCell>Blog Title</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>
                <span>Edit</span>
              </Table.HeadCell>
            </Table.Head>
            {userBlogs.map((blog) => (
              <Table.Body className="divide-y">
                <Table.Row>
                  <Table.Cell>
                    {new Date(blog.updatedAt).toLocaleDateString()}
                  </Table.Cell>

                  <Table.Cell>
                    <Link to={`/blog/${blog.slug}`}>
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-20 h-10 object-cover bg-gray-500"
                      />
                    </Link>
                  </Table.Cell>

                  <Table.Cell>
                    <Link
                      className="font-medium text-cyan-600 dark:text-lime-600"
                      to={`/blog/${blog.slug}`}
                    >
                      {blog.title}
                    </Link>
                  </Table.Cell>

                  <Table.Cell>{blog.category}</Table.Cell>

                  <Table.Cell>
                    <span className="text-red-500 font-medium hover:underline cursor-pointer">
                      Delete
                    </span>
                  </Table.Cell>

                  <Table.Cell>
                    <Link
                      to={`/update-blog/${blog._id}`}
                      className="text-amber-500 font-medium hover:underline cursor-pointer"
                    >
                      <span>Edit</span>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
        </>
      ) : (
        <p>You have no blogs yet!</p>
      )}
    </div>
  );
};

export default DashBlogs;
