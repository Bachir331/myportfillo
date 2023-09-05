import React from 'react'


export default function Skillsitem(props) {

  return (
    <div>
           <div className="Tap" >
                  <div className="logo">
                    <img src={props.src} alt="Logo"/>
                  </div>
                  <div className='title-skill'>
                    <h2>{props.Name}</h2>
                  </div>
                  <div className='divhover'>
                    <p>{props.Level}</p>
                  </div>
            </div>  
    </div>
  )
}
