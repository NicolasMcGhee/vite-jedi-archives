import React from 'react'
import "./Featured.css"

export default function Featured(props) {
  return (
    <section className='featured_Container'>
        <div className='featured_LeftSide'>
            <h1>The Jedi</h1>
            <div className='featured_LeftSide_Text'>
                <p className={`${props.active.id === 1 ? "active" : "" }`} onClick={() => props.setActive({pic: "/Jedi/Yoda.png", id: 1})}>Yoda</p>
                <p className={`${props.active.id === 2 ? "active" : "" }`} onClick={() => props.setActive({pic: "/Jedi/Mace_Windu.png", id: 2})}>Mace Windu</p>
                <p className={`${props.active.id === 3 ? "active" : "" }`} onClick={() => props.setActive({pic: "/Jedi/Obi-Wan-Kenobi.png", id: 3})}>Obi-Wan Kenobi</p>
                <p className={`${props.active.id === 4 ? "active" : "" }`} onClick={() => props.setActive({pic: "/Jedi/Anakin_Skywalker.png", id: 4})}>Anakin Skywalker</p>
            </div>
        </div>
        <div>
            <img className='featuredImg' src={props.active.pic} alt=""/>
        </div>
        
    </section>
  )
}
