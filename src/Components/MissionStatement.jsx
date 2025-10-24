import React from "react";
import "./MissionStatement.css";
import Jocastu from "/Jedi/JocastaNu-Db.webp";

export default function MissionStatement() {
  return (
    <section className="MS_Container">
      <div className="MS_Top_Section">
        {/* <h1>We're redefining metal recycling.</h1> */}
        <p>We're redefining metal recycling.</p>
        <p>
          Working with metal comes with a downside: waste. As much as 20% of
          metal is wasted in manufacturing – with swarf ending up on floors,
          stored in waste containers or, even worse, in landfills. Sun Metalon’s
          technology recycles that waste into profit – all on‑site with zero CO2
          emissions.
        </p>
      </div>
      <div className="MS_Bottom_Section">
        <div className="MS_Bottom_Title">
          <div>
            <h2>Jocasta Nu</h2>
            <h4>Chief Librarian</h4>
          </div>
          <img src={Jocastu} alt="" width={500} />
        </div>
        <ul>
          <li>Endless Mysteries</li>
          <li>Centuries of Knowledge</li>
          <li>Truth Uncovered</li>
        </ul>
      </div>
    </section>
  );
}
