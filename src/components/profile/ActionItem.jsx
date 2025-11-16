import React from "react";
import {
  HeartIcon,
  ArrowDownTrayIcon,
  GlobeAltIcon,
  MapPinIcon,
  FolderIcon,
  ComputerDesktopIcon,
  TrashIcon,
  ClockIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

const iconMap = {
  "Latest feed": <HeartIcon className="w-6 h-6" />,
  "Latest uploads": <ArrowDownTrayIcon className="w-6 h-6" />,
  "Languages": <GlobeAltIcon className="w-6 h-6" />,
  "Location": <MapPinIcon className="w-6 h-6" />,
  "Files and documents": <FolderIcon className="w-6 h-6" />,
  "Display": <ComputerDesktopIcon className="w-6 h-6" />,

  "Recently deleted": <TrashIcon className="w-6 h-6" />,
  "Clear History": <ClockIcon className="w-6 h-6" />,
  "Exit": <ArrowLeftOnRectangleIcon className="w-6 h-6" />,
};

const ActionItem = ({ title }) => {
  return (
    <div className="flex items-center gap-4 cursor-pointer group">
      {/* Icon */}
      <div className="text-gray-700 group-hover:text-blue-600 transition">
        {iconMap[title]}
      </div>

      {/* Title */}
      <p className="text-lg group-hover:text-blue-600 transition">
        {title}
      </p>
    </div>
  );
};

export default ActionItem;
