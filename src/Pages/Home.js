import React from 'react'
import './css/Home.css'
import TypeWriterEffect from 'react-typewriter-effect';



export default function Home() {
  return (
    <div className='Back-Home-panel'   >    
        <div className='Home-Panel'>
          <div className='Title-Home-Panel'>
        <div className='textt'>
            <p>Hello world , im  </p>
            <h1 >Bachir Ben Oun </h1>
            </div>
            <div className='text-change'>
              <div className='title'>
            <TypeWriterEffect
        textStyle={{
          fontSize: '',
          color:'white',
          textTransform : 'uppercase',
          
        }}
        cursorColor ='white'
        startDelay={100}
        multiText={['Front-End Developer REACT', 'UI/UX DESIGNER' , 'Video Editor']}
        multiTextDelay={1000}
        multiTextLoop={true} 
        typeSpeed={50}
        
      />
      </div>
      </div>

<p className='Welcome-to-portfillo-text'>Welcome to My personal Website 	<span role="img" aria-label="Grinning Face with Smiling Eyes">&#128512;</span></p>

      </div>
        <div className='Img-Home-Panel'>
        <div className='Imgg-div'>
      
      </div>
      <div className='img-home'></div>
        </div>
        </div>
    </div>
  )
}
