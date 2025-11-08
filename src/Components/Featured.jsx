import React, { useEffect, useState } from "react";
import "./Featured.css";
import data from "../../data.json";
import { Link } from "react-router";

export default function Featured() {
  const [selectedImage, setSelectedImage] = useState(data[0]);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  useEffect(() => {
    setSelectedImage(data[getRandomInt(8)]);
  }, []);

  return (
    <section
      className={`featured_Container ${
        selectedImage.status === "Jedi"
          ? "Blue"
          : selectedImage.status === "Sith"
          ? "Red"
          : "Grey"
      }`}
    >
      {/* Flex: 2 Sections */}
      <div className="featured_Flex">
        {/* Section 1 */}
        <div className="featured_Info">
          <div className="featured_Desc">
            <h4>Featured</h4>
            <div>
              <h1>{selectedImage.name}</h1>
              <h3>{selectedImage.rank}</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, earum vitae voluptas quasi magnam impedit animi iste
              non tempora? Corporis ea eligendi, quam dolor doloremque
              consequatur soluta accusantium ex ducimus modi, ad beatae tempora
              ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Minus maxime blanditiis ullam, delectus molestias quasi sed
              repellat fugiat ea consequatur id quaerat numquam sunt dolor
              ratione eveniet atque. Sint, tempore.
            </p>
          </div>

          <Link to={selectedImage.link}>Learn More</Link>
        </div>
        {/* Section 2 */}
        <div className="Featured_RightSide">
          <img
            className="featured_Image"
            src={selectedImage.picture.profile}
            alt={`Picture of ${selectedImage.name}`}
          />
        </div>
      </div>
    </section>
  );
}
