import React from 'react'
import  './css/Project.css'
import ProjectItem from '../components/ProjectItem'
import Projectimg from '../Pages/imgproject/imgproject'

export default function Project() {
  return (
    <div>
      <div className='background'>        </div>
            <div className='backPro-panel'>

                <div className='P-panel'>
                <div className='Title'>
                  <div>
                  <h1>Past Project Experience</h1>
                <p>Here you will find some of the personal and clients Projects that I created </p>
                </div>
               
              </div>
              <div className='Project-View'> 
                <ProjectItem NameProject="RESPONSIVE TEMPLATE" Tools="HTML/css/js" src={Projectimg.Template} go="https://www.behance.net/gallery/178954711/RESPONSIVE-TEMPLATE-HTML-CSS-JS"/>
                <ProjectItem NameProject="Music player app Design" Tools="ADOBE XD" src={Projectimg.MusicP} go="https://www.behance.net/gallery/156869669/Music-player-app-Design-My-First-project"/>
                <ProjectItem NameProject="UI GAME PACK" Tools="ADOBE AI/ADOBE XD" src={Projectimg.Game} go="https://www.behance.net/gallery/178950793/UI-GAME-PACK-ELEMENTS"/>
                </div>
                </div>
                <a href="https://www.behance.net/Bachirbnoun" target="_blank" rel="noopener noreferrer">
                <button class="More-btn">
                More
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
  
  <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/>
  </svg>
         
                </button>
                </a>
            </div>
    </div>
  )
}
