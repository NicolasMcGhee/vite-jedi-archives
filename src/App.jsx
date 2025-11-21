// import { useState } from 'react'
import "./App.css";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import data from "../data.json";
import { Route, Routes } from "react-router";
import InfoPage from "./Components/InfoPage";
import Lenis from "lenis";
import Footer from "./Components/Footer";
import HomePage from "./Components/Pages/HomePage";

function App() {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route path="/" element={<HomePage data={data} />} />
        <Route path="/:postId" element={<InfoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
