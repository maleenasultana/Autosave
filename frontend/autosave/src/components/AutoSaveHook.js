import React, { useState, useCallback } from "react";
import "./About.css";

import Autosave from './Autosave';

export const LOCAL_STORAGE_KEY = 'react-autosave';

export default function App() {
  const [experimentData, setExperimentData] = useState(
    () => ({ name: window.localStorage.getItem(LOCAL_STORAGE_KEY) ?? '' })
  );  

  const onChangeName = useCallback((e) => {
    const experimentName = e.target.value;
    setExperimentData({ name: experimentName });
  }, []);

  return (
    <div className="App">
      <h1>Autosave with React Hooks</h1>
      <h4>Try editing the textbox below to see some autosave magic happen!</h4>
      <input type="text" value={experimentData.name} onChange={onChangeName} />
      <Autosave experimentData={experimentData} />
    </div>
  );
}
