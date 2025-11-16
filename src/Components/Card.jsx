import React from "react";
import { Link } from "react-router";
import "./Card.css";
export default function Card(props) {
  return (
    <div className="Card_Container">
      <div className="Card_Top"
      style={{
          backgroundImage: `url(${props.profilePic})`,
          backgroundPosition: "top",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <img src={props.profilePic} alt=""/> */}
        <Link to={props.Link}><p>Learn More</p></Link>
        
      </div>
      <div className="Card_Bottom">
        <h1>{props.Name}</h1>
        <div className="Card_Info">
          <h3>{props.HomeWorld}</h3>
          <h3>{props.Status}</h3>
        <h3>{props.Rank}</h3>
        
        </div>
        
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, explicabo
          perferendis! Minima deserunt a nemo fuga doloribus eaque. Laboriosam,
          veritatis aspernatur iste eligendi quaerat nulla?
        </p> */}
      </div>
    </div>
  );
}
