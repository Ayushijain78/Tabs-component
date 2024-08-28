import React from "react";

const TabHeader = ({ headers, onTabClick, activeTab, tabPosition="tab-left" }) => {
  return (
    <div className={`tabs-ontainer ${tabPosition}`}>
      {headers.map((header, index) => {
        return (
          <button
            className={`${activeTab === header.id ? "tab active-tab" : "tab"} ${header.disabled ? "tab disabled-tab" : ""}`}
            key={index}
            onClick={() => onTabClick(header.id)}
          >
            {header.header}
          </button>
        );
      })}
    </div>
  );
};

export default TabHeader;
