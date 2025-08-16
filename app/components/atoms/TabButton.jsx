import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-blue-500"
    : "text-[#ADB7BE]";

  return (
    <button
      onClick={selectTab}
      className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}
      type="button"
    >
      {children}
    </button>
  );
};

export default TabButton;
