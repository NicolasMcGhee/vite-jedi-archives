import React from "react";
import "./Card.css";
export default function Card(props) {
  return (
    <div className="Card_Container">
      <div className="Card_Top">
        <img src={props.profilePic} alt=""/>
        <h1>{props.Name}</h1>
        <h3>{props.Status}</h3>
      </div>
      <div className="Card_Bottom">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, explicabo
          perferendis! Minima deserunt a nemo fuga doloribus eaque. Laboriosam,
          veritatis aspernatur iste eligendi quaerat nulla?
        </p>
      </div>
    </div>
  );
}
