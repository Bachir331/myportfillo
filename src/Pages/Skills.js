import React from 'react'
import './css/Skills.css'
import './css/Skillseme.css'
import imagePaths from './img/Imgsrc'
import Skillsitem from '../components/Skillsitem'


export default function Skills() {

  return (
    <div>
        <div className='back-panel'>
            <div className='paanel'>
              <div className='text-panel'>
              <h1>WHAT I DO ! </h1>
              </div>  
             <div className='Skill-continaer'>
               <div className='ttpanel'>
            <div className='Path-1'>
            <div className='box1'>
            <div className='Three-items'>
<div className=''>            
<div className=''>
<div className='rr'>
   <div className='title-text-panel'>
   <h3>Web</h3>
   <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
<path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
   </div>


<div className='divf'>

<Skillsitem Name="HTML" Level="Advanced" src={imagePaths.html} />
<Skillsitem Name="CSS" Level="Advanced" src={imagePaths.css} />
<Skillsitem Name="Javascript" Level="Advanced" src={imagePaths.js} />
<Skillsitem Name="REACT JS" Level="Advanced" src={imagePaths.react} />
<Skillsitem Name="BOOTSTRAP" Level="Advanced" src={imagePaths.Boots} />
<Skillsitem Name="SASS" Level="Advanced" src={imagePaths.sass} />
</div>
</div>
 </div>
</div>
</div>
            </div>
            <div className='box-3'>
   <div className='desgin-items'>

<div className=''>
 <div className='skil'>
<div className='rr'>
<div className='title-text-panel'>
   <h3>Design</h3>
   <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
<path d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z"/></svg>
   </div>
<div className='divf'>
<Skillsitem Name="Adobe PS" Level="Advanced" src={imagePaths.Ps} />
<Skillsitem Name="Adobe Ai" Level="Advanced" src={imagePaths.Ai} />
<Skillsitem Name="Adobe AE" Level="Advanced" src={imagePaths.Ae} />
<Skillsitem Name="Adobe pr" Level="Advanced" src={imagePaths.Pr} />

</div>
</div>


</div>



 </div>
</div>
   </div>
   <div className='box-2'>
   <div className='UI-UX-panel'>
         <div className='box3'>
                  <div className='skil'>
                              <div className='rr'>
                              <div className='title-text-panel'>
   <h3>Audio</h3>
   <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
<path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"/></svg>
   </div>
                           <div className='divf'>

                        <Skillsitem Name="FL STUDIO" Level="Advanced" src={imagePaths.FL} />
                        <Skillsitem Name="audacity" Level="Advanced" src={imagePaths.Auda} />
                  
                  </div>
                           </div>
                  

                              </div>
               </div>

         </div>
   </div>
            </div>           
            <div className='Path-1'>
            <div className='box1'>
            <div className='Three-items'>
<div className=''>            
<div className='skil'>
<div className='rr'>
<div className='title-text-panel'>
   <h3>TOOLS</h3>
   <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
<path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
   </div>
<div className='divf'>

<Skillsitem Name="vscode" Level="Advanced" src={imagePaths.VSC} />
<Skillsitem Name="GitHub" Level="Advanced" src={imagePaths.Ghub} />
<Skillsitem Name="Git" Level="Advanced" src={imagePaths.Git} />
<Skillsitem Name="NPM" Level="Advanced" src={imagePaths.NPM} />
<Skillsitem Name="UNITY" Level="Advanced" src={imagePaths.Unity} />
<Skillsitem Name="OBS" Level="Advanced" src={imagePaths.OBS} />
</div>
</div>


   </div>
</div>

</div>
            </div>
            <div className='box-3'>
   <div className='office-items '>
<div className=''>            
<div className=''>
<div className='rr'>
<div className='title-text-panel'>
   <h3>MC office</h3>
   <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
<path d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"/></svg>
   </div>
<div className='divf'>

<Skillsitem Name="WORD" Level="Advanced" src={imagePaths.WORD} />
<Skillsitem Name="PPT" Level="Advanced" src={imagePaths.PPT} />
<Skillsitem Name="Access" Level="Advanced" src={imagePaths.BD} />
<Skillsitem Name="Excel" Level="Advanced" src={imagePaths.EX} /> 
</div>
</div>


   </div>
</div>
</div>
   </div>

   <div className='box-2'>
   <div className='UI-UX-panel'>
         <div className='box3'>
                  <div className='skil'>
                              <div className='rr'>
                              <div className='title-text-panel'>
   <h3>UI</h3>
   <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
<path d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
   </div>
                           <div className='divf'>

                        <Skillsitem Name="Adobe XD" Level="Advanced" src={imagePaths.xd} />
                        <Skillsitem Name="figma" Level="Advanced" src={imagePaths.figma} />
                  
                  </div>
                           </div>
                  

                              </div>
               </div>
         </div>
   </div>
            </div>           
     </div>
               </div>         
            </div>
            
        </div>
    </div>
  )
}
