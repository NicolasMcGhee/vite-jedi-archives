import { useState } from "react";
import "./Banner.css";
import { motion } from "motion/react";

const imgs = [{ title: "Darth Vader", pic: "/Vader-Profile.jpg" }, {title: "Tarkin", pic: "/Tarkin.jpg"}];

export default function Banner() {
    const [imgIndex, setImgIndex] = useState(0)

  return (
    <section className="Banner_Container">
      <motion.section 
      animate={{
        translateX: `-${imgIndex}%`,
      }}
      className="Banner_ImageContainer">
        <Images />
      </motion.section>
      {/* <button onClick={() => setImgIndex(imgIndex - 100)}>Press</button>
      <button onClick={() => setImgIndex(imgIndex + 100)}>Press</button> */}
    </section>
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
