import React, { useState } from "react";

const Tabs = (props) => {
  const { tabs } = props;

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={index === activeTab ? "active" : ""}
          onClick={() => setActiveTab(index)}
        >
          {tab.label}
        </button>
      ))}

      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
