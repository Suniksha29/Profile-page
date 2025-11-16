import React from "react";
import ActionItem from "./ActionItem";

const FeatureList = ({ items }) => {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => (
        <ActionItem key={index} title={item.title} />
      ))}
    </div>
  );
};

export default FeatureList;
