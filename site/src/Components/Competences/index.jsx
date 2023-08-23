import frontend from '../../Assets/Front-end-logo.png';
import backend from '../../Assets/backend.png';
import outils from '../../Assets/outils-logo.png';


function competences() {

return(
    
    <section id ='section-competences' >

   <h2 className='titre-3'> Mes competences</h2>

   <div id="Competences">

      <div className='block-1'>
        <img src= {frontend} alt='frontend-logo'/>
        <ul>
           <li>HTML5</li>
           <li>CSS3/SASS/SCSS</li>
           <li>JavaScript</li>
          <li>React.js</li>
       </ul>
     </div>

      <div className='block-2'>
        <img src= {backend} alt='backend-logo'/>
        <ul>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Express.js</li>
        
       </ul>
      </div>

     <div className='block-3'>
      <img src= {outils} alt='outils-logo'/>
      <ul>
        <li>MongoDb</li>
        <li>Visual Studio Code</li>
        <li>Terminal/Npm</li>
        <li>Github</li>
        <li>Figma</li>
      </ul>
      </div>

    </div>

    </section>

)

}

export default competences;