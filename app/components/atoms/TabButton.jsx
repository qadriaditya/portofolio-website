import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button
      onClick={selectTab}
      className={
        "relative text-muted font-semibold bg-transparent outline-none border-none px-2 mt-3 mr-3 transition-colors duration-300"
      }
      type="button"
      style={{
        position: "relative",
        background: "transparent",
        border: "none",
      }}
    >
      <span
        className={`inline-block ${
          active ? "text-primary" : ""
        } transition-transform duration-300 hover:translate-y-[-2px] hover:scale-[1.02]`}
      >
        {children}
      </span>
      <span
        className={`absolute left-0 -bottom-1 h-[2px] bg-[var(--primary-500)] rounded ${
          active ? "w-full" : "w-0"
        } transition-all duration-300`}
      ></span>
    </button>
  );
};

export default TabButton;
