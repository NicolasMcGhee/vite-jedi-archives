// import { useState } from 'react'
import "./App.css";
import Navbar from "./Components/Navbar";
import Featured from "./Components/Featured";
import { useEffect, useState } from "react";
import Card from "./Components/Card";
import CardWrapper from "./Components/CardWrapper";
import data from "../data.json";
import { Route, Routes } from "react-router";
import InfoPage from "./Components/InfoPage";
import Lenis from "lenis";
import JucastaNuu from "./Components/JucastaNuu";

function App() {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Featured />
              <JucastaNuu />
              <CardWrapper>
                {data.map((item) => (
                  <Card
                    profilePic={item.picture.profile}
                    Name={item.name}
                    Status={item.status}
                    Link={item.link}
                    Rank={item.rank}
                    HomeWorld={item.homeWorld}
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
