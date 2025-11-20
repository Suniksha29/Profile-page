import React from "react";
import { CameraIcon } from "@heroicons/react/24/outline";

const ProfileHeader = ({ user, isEditing, onEditToggle }) => {
  return (
    <div className="flex items-center gap-6 mb-8">
      <div className="relative group cursor-pointer">
        <img 
          src={user.avatar} 
          alt={user.fullName} 
          className="w-20 h-20 rounded-full object-cover shadow-sm"
        />
        <div className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-md border border-gray-100 group-hover:bg-gray-100">
          <CameraIcon className="h-4 w-4 text-gray-600" />
        </div>
      </div>
      
      <div className="flex-1">
        <h2 className="text-xl font-bold text-gray-900">{user.fullName}</h2>
        <p className="text-gray-500 text-sm mb-3">{user.email}</p>
        <button 
          onClick={onEditToggle}
          className="bg-[#3b82f6] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors shadow-sm"
        >
          {isEditing ? "Close editor" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;

