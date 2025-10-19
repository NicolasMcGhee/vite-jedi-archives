import React, { useState } from "react";
import "./Banner.css";
import { motion } from "motion/react";

const imgs = [{ title: "Vader", pic: "/Vader-Profile.jpg" }, {title: "Tarkin", pic: "/Tarkin.jpg"}];

export default function Banner() {
    const [imgIndex, setImgIndex] = useState(0)

  return (
    <div className="Banner_Container">
      <motion.div 
      animate={{
        translateX: `-${imgIndex * 100}%`
      }}
      className="Banner_ImageContainer">
        <Images />
      </motion.div>
    </div>
  );
}

const Images = () => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc.pic})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="Banner_ImagesConponent"
          >
            {" "}
            <h1 style={{ color: "white" }}>{imgSrc.title}</h1>
          </div>
        );
      })}
    </>
  );
};
