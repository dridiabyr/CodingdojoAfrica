import React from 'react';
import Tabs from './Components/Tabs.jsx';

const App = () => {
  const tabs = [
    {
      label: 'Tab 1',
      content: <div>Content for Tab 1</div>,
      callback: () => console.log('Tab 1 clicked'),
    },
    {
      label: 'Tab 2',
      content: <div>Content for Tab 2</div>,
      callback: () => console.log('Tab 2 clicked'),
    },
    {
      label: 'Tab 3',
      content: <div>Content for Tab 3</div>,
      callback: () => console.log('Tab 3 clicked'),
    },
    {
      label: 'Tab 4',
      content: <div>Content for Tab 4</div>,
      callback: () => console.log('Tab 4 clicked'),
    }
    
  ];

  return (
    <div>
      <h1>My Tabs App</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;
