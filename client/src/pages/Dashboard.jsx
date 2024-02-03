import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ProfilePage from "../components/ProfilePage";
import DashSidebar from "../components/DashSidebar";
import DashBlogs from "../components/DashBlogs";
import DashUsers from "../components/DashUsers";
import DashComments from "../components/DashComments";
import DashOverview from "../components/DashOverview";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* Profile & others */}
      {tab === "profile" && <ProfilePage />}
      {/* Blogs */}
      {tab === "blogs" && <DashBlogs />}
      {/* Users */}
      {tab === "users" && <DashUsers />}
      {/* Comments */}
      {tab === "comments" && <DashComments />}
      {/* Dashboard Overview */}
      {tab === "overview" && <DashOverview />}
    </div>
  );
};

export default Dashboard;
