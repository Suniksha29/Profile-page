import React from "react";
import FeatureList from "./FeatureList";

const ProfileActions = () => {
  const topItems = [
    { title: "Latest feed" },
    { title: "Latest uploads" },
    { title: "Languages" },
    { title: "Location" },
    { title: "Files and documents" },
    { title: "Display" },
  ];

  const bottomItems = [
    { title: "Recently deleted" },
    { title: "Clear History" },
    { title: "Exit" },
  ];

  return (
    <div className="mt-4">
      <FeatureList items={topItems} />

      {/* Divider */}
      <hr className="my-6 border-gray-300" />

      <FeatureList items={bottomItems} />
    </div>
  );
};

export default ProfileActions;
