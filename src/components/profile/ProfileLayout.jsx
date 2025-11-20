import React from "react";

const ProfileLayout = ({ title, children, actionSlot }) => {
  return (
    <div className="py-4 px-8 lg:py-4 lg:px-16 max-w-4xl mx-4">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1 inline-block border-b-[5px] border-gray-900 pb-1">
            {title}
          </h1>
        </div>
        {actionSlot}
      </div>

      {children}
    </div>
  );
};

export default ProfileLayout;

