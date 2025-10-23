// import { useState } from 'react'
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import MissionStatement from "./Components/MissionStatement";
import Featured from "./Components/Featured";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0)
  const [active, setActive] = useState({pic: "/Jedi/Yoda.png", id: 1});
  const [test, setTest] = useState(1)
  
  return (
    <>
      <Navbar />
      <Banner />
      <MissionStatement />
      <Featured active={active} setActive={setActive} test={test} setTest={setTest}/>
    </>
  );
}

export default App;
