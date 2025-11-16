import React from "react";
import SidebarItem from "./SidebarItem";

import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  UsersIcon,
  NewspaperIcon,
  StarIcon,
  CalendarDaysIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

import logo from "../../assets/hrms-logo.png";
import userImg from "../../assets/user-photo.png";

const Sidebar = () => {
  const menu = [
    { title: "Dashboard", icon: <HomeIcon className="w-6 h-6" />, link: "/" },
    { title: "Chat", icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />, link: "/chat" },
    { title: "Employees", icon: <UsersIcon className="w-6 h-6" />, link: "/employees" },
    { title: "Feed", icon: <NewspaperIcon className="w-6 h-6" />, link: "/feed" },
    { title: "Recognition", icon: <StarIcon className="w-6 h-6" />, link: "/recognition" },
    { title: "Event", icon: <CalendarDaysIcon className="w-6 h-6" />, link: "/event" },
    { title: "Profile", icon: <UserCircleIcon className="w-6 h-6" />, link: "/profile" },
    { title: "Settings", icon: <Cog6ToothIcon className="w-6 h-6" />, link: "/settings" },
  ];

  return (
    <div className="w-[260px] bg-blue-600 text-white min-h-screen px-6 py-6 flex flex-col gap-8">

      {/* Logo */}
      <img src={logo} className="w-36 mx-auto" />

      {/* User Section */}
      <div className="flex items-center gap-3">
        <img
          src={userImg}
          className="w-12 h-12 rounded-full border-2 border-white"
        />
        <div>
          <p className="font-semibold text-lg">Maria</p>
          <p className="text-sm text-blue-100">HR Manager</p>
        </div>
      </div>

      {/* MENU */}
      <div className="flex flex-col gap-2 mt-4">
        {menu.map((m, index) => (
          <SidebarItem key={index} title={m.title} icon={m.icon} link={m.link} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
