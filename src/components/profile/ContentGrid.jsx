import React from "react";

const ContentGrid = ({ sections }) => {
  const renderSeparator = (index, total) => {
    // Add separators after Latest uploads, Location, and Display
    if (index === 1 || index === 3 || index === 5) {
      return <div key={`sep-${index}`} className="my-4 border-t border-gray-300"></div>;
    }
    return null;
  };

  return (
    <div className="space-y-2 max-w-2xl">
      {sections.map((section, index) => (
        <React.Fragment key={section.title}>
          {renderSeparator(index, sections.length)}
          <div 
            className="flex items-center gap-12 py-1.5 px-2 rounded-lg cursor-pointer hover:bg-white hover:shadow-sm transition-all group"
          >
            <div className="text-gray-900 group-hover:text-blue-600">
              {React.cloneElement(section.icon, { className: "h-5 w-5 stroke-[1.5]" })}
            </div>
            <span className="text-gray-900 font-medium text-lg">{section.title}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ContentGrid;

