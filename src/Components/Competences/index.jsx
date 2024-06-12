import frontend from '../../Assets/Front-end-logo.png';
import backend from '../../Assets/backend.png';
import outils from '../../Assets/outils-logo.png';


function competences() {

return(
    
    <section id ='section-competences' >

   <h2 className='titre-3'> Mes compétences</h2>

   <div id="Competences">

      <div className='block-1'>
        <img src= {frontend} alt='frontend-logo'/>
        <ul>
           <li>HTML5</li>
           <li>CSS3/SASS/SCSS</li>
           <li>JavaScript</li>
          <li>React.js</li>
          <li>Angular</li>
       </ul>
     </div>

      <div className='block-2'>
        <img src= {backend} alt='backend-logo'/>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>PHP</li>
          <li>Symfony</li>
       </ul>
      </div>

     <div className='block-3'>
      <img src= {outils} alt='outils-logo'/>
      <ul> 
        <li>Mysql</li>
        <li>MongoDb</li>
        <li>Visual Studio Code</li>
        <li>Terminal</li>
        <li>Docker</li>
        <li>Figma</li>
      </ul>
      </div>

    </div>

    </section>

)

}

export default competences;