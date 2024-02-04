import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Table, Modal, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const DashBlogs = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [userBlogs, setUserBlogs] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [blogIdToDelete, setBlogIdToDelete] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`/api/blog/getblogs?userId=${currentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setUserBlogs(data.blogs);
          if (data.blogs.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (currentUser.isAdmin) {
      fetchBlogs();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = userBlogs.length;
    try {
      const res = await fetch(
        `api/blog/getblogs?userId=${currentUser._id}&startIndex=${startIndex}`,
      );

      const data = await res.json();
      if (res.ok) {
        setUserBlogs((prev) => [...prev, ...data.blogs]);

        if (data.blogs.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteBlog = async () => {
    setShowModal(false);

    try {
      const res = await fetch(
        `/api/blog/deleteblog/${blogIdToDelete}/${currentUser._id}`,
        {
          method: "DELETE",
        },
      );

      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUserBlogs((prev) =>
          prev.filter((blog) => blog._id !== blogIdToDelete),
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-600 scrollbar-thumb-slate-300
     dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500"
    >
      {currentUser.isAdmin && userBlogs.length > 0 ? (
        <>
          <Table hoverable className=" shadow-md">
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
              <Table.Body className="divide-y" key={blog._id}>
                <Table.Row className="bg-gray-700 dark:border-gray-600 dark:bg-slate-600">
                  <Table.Cell>
                    {new Date(blog.updatedAt).toLocaleDateString()}
                  </Table.Cell>

                  <Table.Cell>
                    <Link to={`/blog/${blog.slug}`}>
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-20 h-10 object-cover bg-gray-300 rounded-md"
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
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setBlogIdToDelete(blog._id);
                      }}
                      className="text-red-500 font-medium hover:underline cursor-pointer"
                    >
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
          {showMore && (
            <button
              className="w-full text-cyan-600 self-center text-sm py-7 dark:text-lime-600"
              onClick={handleShowMore}
            >
              Show More...
            </button>
          )}
        </>
      ) : (
        <p>You have no blogs yet!</p>
      )}

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-800 dark:text-gray-400">
              Are you sure you want to delete this blog?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeleteBlog}>
                Yes, I'm sure
              </Button>
              <Button color="green" onClick={() => setShowModal(false)}>
                No cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DashBlogs;
