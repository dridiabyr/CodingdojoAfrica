import React, { useState } from 'react';
import './Tabs.css'; // CSS file for styling

const Tabs = ({ tabs }) => {
  const [selectedTab, setselectedTab] = useState(0);

  const handleTabClick = (index, callback) => {
    setselectedTab(index);
    if (callback) {
      callback();
    }
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={{selectedTab}}
            onClick={() => handleTabClick(index, tab.callback)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tabs-content">
        {tabs[selectedTab].content}
      </div>
    </div>
  );
};

export default Tabs;
