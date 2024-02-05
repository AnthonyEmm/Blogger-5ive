import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  HiAnnotation,
  HiArrowNarrowUp,
  HiDocumentText,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";

const DashOverview = () => {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [lastMonthUsers, setLastMonthUsers] = useState(0);
  const [lastMonthBlogs, setLastMonthBlogs] = useState(0);
  const [lastMonthComments, setLastMonthComments] = useState(0);

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`/api/user/getusers?limit=5`);
        const data = await res.json();
        if (res.ok) {
          setUsers(data.users);
          setTotalUsers(data.totalUsers);
          setTotalUsers(data.lastMonthUsers);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`/api/blog/getblogs?limit=5`);
        const data = await res.json();
        if (res.ok) {
          setBlogs(data.blogs);
          setTotalBlogs(data.totalBlogs);
          setLastMonthBlogs(data.lastMonthBlogs);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comment/getComments?limit=5`);
        const data = await res.json();
        if (res.ok) {
          setComments(data.comments);
          setTotalComments(data.totalComments);
          setLastMonthComments(data.lastMonthComments);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchUsers();
      fetchBlogs();
      fetchComments();
    }
  }, [currentUser]);

  return (
    <div className="p-3 md:mx-auto">
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md">
          <div className="flex justify-between">
            <div className="">
              <h3 className="text-gray-300 text-md uppercase">Total Users</h3>
              <p className="text-2xl text-amber-400">{totalUsers}</p>
            </div>
            <HiOutlineUserGroup className="bg-teal-600 text-amber-200 rounded-full text-5xl p-3 shadow-lg" />
          </div>
          <div className="flex gap-2 text-sm">
            <span className="text-green-400 flex items-center">
              <HiArrowNarrowUp />
              {lastMonthUsers}
            </span>
            <div className="text-gray-300">Last Month</div>
          </div>
        </div>
        <div className="flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md">
          <div className="flex justify-between">
            <div className="">
              <h3 className="text-gray-300 text-md uppercase">
                Total Comments
              </h3>
              <p className="text-2xl text-indigo-400">{totalComments}</p>
            </div>
            <HiAnnotation className="bg-indigo-800 text-amber-200 rounded-full text-5xl p-3 shadow-lg" />
          </div>
          <div className="flex gap-2 text-sm">
            <span className="text-green-400 flex items-center">
              <HiArrowNarrowUp />
              {lastMonthComments}
            </span>
            <div className="text-gray-300">Last Month</div>
          </div>
        </div>
        <div className="flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md">
          <div className="flex justify-between">
            <div className="">
              <h3 className="text-gray-300 text-md uppercase">Total Blogs</h3>
              <p className="text-2xl text-lime-600">{totalBlogs}</p>
            </div>
            <HiDocumentText className="bg-lime-700 text-amber-200 rounded-full text-5xl p-3 shadow-lg" />
          </div>
          <div className="flex gap-2 text-sm">
            <span className="text-green-400 flex items-center">
              <HiArrowNarrowUp />
              {lastMonthBlogs}
            </span>
            <div className="text-gray-300">Last Month</div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mx-auto justify-center mt-5">
        <div className="flex flex-col w-full md:w-auto shadow-md p-2 rounded-md dark:bg-slate-800">
          <div className="flex justify-between p-3 text-sm font-semibold">
            <h1 className="text-center p-2">All Users</h1>
            <Button gradientDuoTone="purpleToBlue">
              <Link to={"/dashboard?tab=users"}>See all</Link>
            </Button>
          </div>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>User Image</Table.HeadCell>
              <Table.HeadCell>Username</Table.HeadCell>
            </Table.Head>
            {users &&
              users.map((user) => (
                <Table.Body key={user._id} className="divide-y">
                  <Table.Row className="bg-gray-700 dark:border-gray-300 dark:bg-slate-600">
                    <Table.Cell className="w-56">
                      <img
                        src={user.profilePicture}
                        alt="user"
                        className="w-10 h-10 rounded-full bg-gray-600 dark:bg-gray-500"
                      />
                    </Table.Cell>
                    <Table.Cell className="text-cyan-400 dark:text-amber-300">
                      {user.username}
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              ))}
          </Table>
        </div>
        <div className="flex flex-col w-full md:w-auto shadow-md p-2 rounded-md dark:bg-slate-800">
          <div className="flex justify-between p-3 text-sm font-semibold">
            <h1 className="text-center p-2">Recent Comments</h1>
            <Button gradientDuoTone="purpleToBlue">
              <Link to={"/dashboard?tab=comments"}>See all</Link>
            </Button>
          </div>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Comment Content</Table.HeadCell>
              <Table.HeadCell>Likes</Table.HeadCell>
            </Table.Head>
            {comments &&
              comments.map((comment) => (
                <Table.Body key={comment._id} className="divide-y">
                  <Table.Row className="bg-gray-700 dark:border-gray-700 dark:bg-slate-600">
                    <Table.Cell className="w-96">
                      <p className="line-clamp-2 text-gray-400">
                        {comment.content}
                      </p>
                    </Table.Cell>
                    <Table.Cell className="text-lime-500 dark:text-lime-500">
                      {comment.numberOfLikes}
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              ))}
          </Table>
        </div>
        <div className="flex flex-col w-full md:w-auto shadow-md p-2 rounded-md dark:bg-slate-800">
          <div className="flex justify-between p-3 text-sm font-semibold">
            <h1 className="text-center p-2">Most Recent Blogs</h1>
            <Button gradientDuoTone="purpleToBlue">
              <Link to={"/dashboard?tab=blogs"}>My Blogs</Link>
            </Button>
          </div>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Blog Image</Table.HeadCell>
              <Table.HeadCell>Blog Title</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
            </Table.Head>
            {blogs &&
              blogs.map((blog) => (
                <Table.Body key={blog._id} className="divide-y">
                  <Table.Row className="bg-gray-700 dark:border-gray-700 dark:bg-slate-600">
                    <Table.Cell>
                      <img
                        src={blog.image}
                        alt="blogs"
                        className="w-14 h-10 rounded-md bg-gray-600 dark:bg-gray-500"
                      />
                    </Table.Cell>
                    <Table.Cell className="text-gray-400 dark:text-gray-300 w-96">
                      {blog.title}
                    </Table.Cell>
                    <Table.Cell className="text-amber-400 dark:text-lime-500 w-5">
                      {blog.category}
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default DashOverview;
