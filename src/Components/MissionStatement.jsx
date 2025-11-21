import React from "react";
import "./MissionStatement.css";
import Jocastu from "/Jedi/Images/Jedi_symbol.svg";
import { Link } from "react-router";
import { div } from "motion/react-client";

export default function MissionStatement() {
  return (
    <div className="MS_Border">
      <section className="MS_Container">
        <div className="MS_Left_Section">
          <div>
            {/* <h1>We're redefining metal recycling.</h1> */}
            <p>
              We here at the archives are dedicated to preserving the history of
              the galaxy for generations to come.
            </p>
          </div>
        </div>
        <div className="MS_Right_Section">
          <div className="MS_Right_Text">
            <p>There is no emotion, there is peace.</p>
            <p>There is no ignorance, there is knowledge.</p>
            <p>There is no passion, there is serenity.</p>
            <p>There is no chaos, there is harmony.</p>
            <p>There is no death, there is the Force.</p>
            <p style={{alignSelf: "end"}}>- The Jedi Code</p>
          </div>
          <div className="MS_Right_Link">
            <img src={Jocastu} alt="" width={250} />
          </div>
          {/* <div className="MS_Bottom_Title">
          <div>
            <h2>Jocasta Nu</h2>
            <h4>Chief Librarian</h4>
          </div>
        </div>
        <ul>
          <li>Endless Mysteries</li>
          <li>Centuries of Knowledge</li>
          <li>Truth Uncovered</li>
        </ul> */}
        </div>
      </section>
    </div>
  );
}
