import "./App.css";
import { TABS_CONFIG } from "./components/utils.js";
import TabHeader from "./components/TabHeader";
import TabPanel from "./components/TabPanel.jsx";
import { useState } from "react";


function App() {
  const [selectedTabId, setSelectedTabId] = useState(TABS_CONFIG[0].id);
  
  let selectedTab = TABS_CONFIG.find((tabItem) => tabItem.id === selectedTabId);
  
  return (
    <div className="App">
      <div>
        <TabHeader
          headers={TABS_CONFIG}
          onTabClick={setSelectedTabId}
          activeTab={selectedTab.id}
          tabPosition={"tab-right"}
        />
       {selectedTab.disabled ? <></> : <TabPanel content={selectedTab.content} styles={""} />}

      </div>
    </div>
  );
}

export default App;
