import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Table } from "flowbite-react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Tooltip } from "flowbite-react";

const DashUsers = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  const [showMore, setShowMore] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`/api/user/getusers`);
        const data = await res.json();
        if (res.ok) {
          setUsers(data.users);
          if (data.users.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (currentUser.isAdmin) {
      fetchUsers();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = users.length;
    try {
      const res = await fetch(`/api/user/getusers?startIndex=${startIndex}`);

      const data = await res.json();
      if (res.ok) {
        setUsers((prev) => [...prev, ...data.users]);

        if (data.users.length < 9) {
          setShowMore(false);
        }
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
      {currentUser.isAdmin && users.length > 0 ? (
        <>
          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell>Date Created</Table.HeadCell>
              <Table.HeadCell>User Image</Table.HeadCell>
              <Table.HeadCell>Username</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Admin</Table.HeadCell>
            </Table.Head>
            {users.map((user) => (
              <Table.Body className="divide-y" key={user._id}>
                <Table.Row className="bg-gray-700 dark:border-gray-300 dark:bg-slate-600 text-gray-400">
                  <Table.Cell>
                    {new Date(user.createdAt).toLocaleDateString()}
                  </Table.Cell>

                  <Table.Cell>
                    <img
                      src={user.profilePicture}
                      alt={user.username}
                      className="w-10 h-10 object-cover bg-gray-500 rounded-full"
                    />
                  </Table.Cell>

                  <Table.Cell>{user.username}</Table.Cell>

                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>
                    {user.isAdmin ? (
                      <Tooltip content="Yes">
                        <FaCheck className="text-green-500" />
                      </Tooltip>
                    ) : (
                      <Tooltip content="No">
                        <FaTimes className="text-red-500" />
                      </Tooltip>
                    )}
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
        <p>You have no user yet!</p>
      )}
    </div>
  );
};

export default DashUsers;
