import React, { Suspense, useEffect, useState } from "react";
import "./Featured.css";
import data from "../../data.json";
import { Link, UNSAFE_decodeViaTurboStream } from "react-router";
import Banner from "./Banner";
import Loading from "./Loading";

export default function Featured() {
  const [selectedImage, setSelectedImage] = useState(data[0]);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  useEffect(() => {
    setSelectedImage(data[getRandomInt(8)]);
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div className="Featured_Border">
      <section
        className={`featured_Container ${
          selectedImage.status === "Jedi"
            ? "Blue"
            : selectedImage.status === "Sith"
            ? "Red"
            : "Grey"
        } `}
        style={{
          backgroundImage: `url(${selectedImage.picture.featured})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Flex: 2 Sections */}
        <div className="featured_Flex">
          {/* Section 1 */}
          <div className="featured_Info">
            <div className="featured_Desc">
              {/* <h4>Featured</h4> */}
              <div className="featured_Title">
                <h1>{selectedImage.name}</h1>
                <h5>{selectedImage.rank}</h5>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, earum vitae voluptas quasi magnam impedit animi iste
                non tempora? Corporis ea eligendi, quam dolor doloremque
                consequatur soluta accusantium ex ducimus modi, ad beatae
                tempora ratione. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Minus maxime blanditiis ullam, delectus
                molestias quasi sed repellat fugiat ea consequatur id quaerat
                numquam sunt dolor ratione eveniet atque. Sint, tempore.
              </p>
            </div>

            <Link to={selectedImage.link}>Learn More</Link>
          </div>
          {/* Section 2 */}
          <div className="Featured_RightSide"></div>
        </div>
      </section>

      {/* Summary */}
      <section className="Summary_Container">
        <div className="Summary_Text">
          <p>The <span className="Summary_Focus">Jedi Archives</span> is the single greatest source of all known knowledge in the galaxy summarized simply as: <span className="Featured_Quote">"If it exists, it's in the archives"</span> </p>
        </div>
        
      </section>
      </div>
    </Suspense>
  );
}
