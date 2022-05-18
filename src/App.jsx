import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/route";
import Header from "./components/header";
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
  const [selected, setSelected] = useState(0);
  //const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <Header/>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route  path='/dropdown'>
        <Dropdown  label="Select a color"
        options={options}
       selected={selected} 
       onSelectedChange={setSelected}/>
      </Route>
      <Route path='/translate'>
        <Translate/>
      </Route>
    </div>
  );
};

export default App;
