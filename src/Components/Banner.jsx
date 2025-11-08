import { useEffect, useState } from "react";
import "./Banner.css";
import { motion } from "motion/react";
import data from "../../data.json";

export default function Banner() {
  const [selectedImage, setSelectedImage] = useState(data[0]);

  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  useEffect(() => {
    setSelectedImage(data[getRandomInt(8)])
  }, [])

  console.log(selectedImage);
  return (
    <section className="Banner_Container">
      <motion.section
        // animate={{
        //   translateX: `-${imgIndex}%`,
        // }}
        // className="Banner_ImageContainer"
      >
        <div
              style={{
                backgroundImage: `url(${selectedImage.picture.profile})`,
                // backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="Banner_ImagesConponent"
            >
              {" "}
              <h1 style={{ color: "white" }}>{selectedImage.title}</h1>
            </div>
      </motion.section>
    </section>
  );
}

