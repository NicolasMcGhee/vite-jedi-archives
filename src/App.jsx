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
import InfoPage from "./Components/InfoPage";

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Banner /> */}
              <Featured />
              <CardWrapper>
                {data.map((item) => (
                  <Card
                    profilePic={item.picture.profile}
                    Name={item.name}
                    Status={item.status}
                    Link={item.link}
                  />
                ))}
              </CardWrapper>
            </>
          }
        />
        <Route path="/:postId" element={<InfoPage />} />
      </Routes>
    </>
  );
}

export default App;
