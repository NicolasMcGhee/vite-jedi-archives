// import { useState } from 'react'
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import MissionStatement from "./Components/MissionStatement";
import Featured from "./Components/Featured";
import { useState } from "react";
import Card from "./Components/Card";
import CardWrapper from "./Components/CardWrapper";
import data from "../data.json";
import { Route, Routes } from "react-router";

function App() {
  const Jedi = {
    Yoda: {
      id: 1,
      pic: "/Jedi/Yoda.png",
      desc: "Jedi grandmaster and one with the force, Yoda was seen as the pillar of the jedi order but as a beacon of the ligh side of the force.",
    },
    MaceWindu: {
      id: 2,
      pic: "/Jedi/Mace_Windu.png",
      desc: "Jedi Master and and Master Of Vapaad",
    },
    ObiWanKenobi: {
      id: 3,
      pic: "/Jedi/Obi-Wan-Kenobi.png",
      desc: "Jedi grandmaster and one with the force, Yoda was seen as the pillar of the jedi order but as a beacon of the ligh side of the force.",
    },
    AnakinSkywalker: {
      id: 4,
      pic: "/Jedi/Anakin_Skywalker.png",
      desc: "Jedi grandmaster and one with the force, Yoda was seen as the pillar of the jedi order but as a beacon of the light side of the force.",
    },
  };

  // const [count, setCount] = useState(0)
  // const [active, setActive] = useState(Jedi.Yoda);
  const [searchValue, setSearchValue] = useState("");
  // console.log(searchValue)
  return (
    <>
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route
          path="/"
          element={
            <CardWrapper>
              {data.map((item) => (
                <Card
                  profilePic={item.picture.profile}
                  Name={item.name}
                  Status={item.status}
                />
              ))}
            </CardWrapper>
          }
        />
        <Route path="/test" element={<Banner/>}/>
      </Routes>
      {/* <Banner /> */}
      {/* <MissionStatement /> */}
      {/* <Featured active={active} setActive={setActive} test={test} setTest={setTest}/> */}
      {/* <Featured active={active} setActive={setActive} Jedi={Jedi}/> */}
    </>
  );
}

export default App;
