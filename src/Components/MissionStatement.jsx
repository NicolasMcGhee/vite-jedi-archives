import React from "react";
import "./MissionStatement.css";
import Tarkin from '/Tarkin.jpg'


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
        {/* <p>The future</p>
        <p>of metal</p>
        <p>recycling</p> */}
        <div className="MS_Bottom_List">
          <img src={Tarkin} alt="" width={500}/>
          <ul>
            <li>Endless Searching</li>
            <li>Centuries of Knowledge</li>
            <li>Open to everyone</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
