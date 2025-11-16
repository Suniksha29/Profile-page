import React from "react";
import {
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

import ProfileActions from "../components/Profile/ProfileActions";
import userPic from "../assets/user-photo.png";

const ProfilePage = () => {
  return (
    <div className="w-full px-16 py-10">
      
      {/* Title */}
      <h1 className="text-4xl font-bold mb-10 border-b-4 border-black w-fit pb-1">
        My Profile
      </h1>

      {/* Profile Header */}
      <div className="flex items-center gap-6 mb-12">
        <img
          src={userPic}
          alt="user"
          className="w-24 h-24 rounded-full object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold">Maria Aryan</h2>
          <p className="text-gray-600">hrmariaaryan@example.com</p>

          <button className="mt-3 flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
            <PencilSquareIcon className="w-5 h-5" />
            Edit Profile
          </button>
        </div>
      </div>

      {/* ACTIONS */}
      <ProfileActions />
    </div>
  );
};

export default ProfilePage;
