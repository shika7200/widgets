import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
const items = [
  {
    title: "What is react?",
    content: "React is frontend framework",
  },
  {
    title: "Why use react?",
    content: "React is favorite Js library among engineers",
  },
  {
    title: "How do you use  react?",
    content: "You use react by crating components",
  },
];

const options = [
  { label: "The Color Red", value: "red" },
  { label: "The Color Green", value: "green" },
  { label: "The Color Blue", value: "blue" },
];
const App = () => {
  //const [selected, setSelected] = useState(options[0]);
 // const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      { showDropdown ?  
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      /> : null} */
      <Translate />
      
      }
    </div>
  );
};

export default App;
