import React from 'react'
import "./Featured.css"

export default function Featured(props) {
  return (
    <section className='featured_Container'>
        <div className='featured_LeftSide'>
          <div className='featured_Desc'>
            <h1>The Jedi</h1>
            <p>{props.active.desc}</p>
          </div>
            
            <div className='featured_LeftSide_Text'>
                <p className={`${props.active.id === 1 ? "active" : "" }`} onClick={() => props.setActive(props.Jedi.Yoda)}>Yoda</p>
                <p className={`${props.active.id === 2 ? "active" : "" }`} onClick={() => props.setActive(props.Jedi.MaceWindu)}>Mace Windu</p>
                <p className={`${props.active.id === 3 ? "active" : "" }`} onClick={() => props.setActive(props.Jedi.ObiWanKenobi)}>Obi-Wan Kenobi</p>
                <p className={`${props.active.id === 4 ? "active" : "" }`} onClick={() => props.setActive(props.Jedi.AnakinSkywalker)}>Anakin Skywalker</p>
            </div>
        </div>
        <div>
            <img className='featuredImg' src={props.active.pic} alt=""/>
        </div>
        
    </section>
  )
}
