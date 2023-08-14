import frontend from './Assets/Front-end-logo.png';
import backend from './Assets/backend.png';
import outils from './Assets/outils-logo.png';
import Header from "./Components/Header";
import Tech from './Assets/tech.png'
import github from './Assets/git-hub.png';
import Projets from './Components/Projets';
import {Datas} from './Datas/DataProjects';
import linkedin from './Assets/linkedin.png';
import email from './Assets/logo-email.png';
import telephone from './Assets/logo-telephone.png'
import './Components/Style/Home.css';




function HomePage() {
  return (
  <main>
     <section id="Accueil">
    <Header/>

   
      <div className="text-block">
         <h1>Je suis Manassé Mukenge - développeur web frontend </h1>
      </div>

    </section>

    

    <section id="A-propos">

    <h2 className='titre-2'> A propos de moi </h2>

    <img src={Tech} alt ='tech'/>

      <p>Passioné par la tech après le Bac j'ai voulu experimenter quelque chose de nouveau dans ma vie.
        C'est en m'informant que j'ai connu le développement web, en voyant les lignes de code qui 
        compose une page web j'etais fascine meme si je n'y comprenais rien du tout.
        Grace à une formation j'ai pu apprendre le HTML5,CSS3, 
        JavaScript et de frameworks de JavaScript comme React.js et Express.js. 
        je souhaite désormais travailler dans le développement web afin d'arrichir mes connaissances 
        et compétences et gagner de l'experience dans ce domaine.
  
         </p>

    </section>

    

  <section id ='section-competences'>

   <h2 className='titre-3'> Mes competences</h2>

   <div id="Competences">

      <div className='block'>
        <img src= {frontend} alt='frontend-logo'/>
        <ul>
           <li>HTML5</li>
           <li>CSS3/SASS/SCSS</li>
           <li>JavaScript</li>
          <li>React.js</li>
       </ul>
     </div>

      <div className='block'>
        <img src= {backend} alt='backend-logo'/>
        <ul>
          <li>JavaScript</li>
          <li>Express.js</li>
        
       </ul>
      </div>

     <div className='block'>
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

    <section id="projets">

      <h2>Mes Projets</h2>
    <div className='images'>
      {Datas.map(({id,title,cover}) =>
      
      <Projets
      id ={id}
      key ={id}
      title={title}
      cover ={cover}
      
      />
      )}
     {console.log(Datas.cover)}
     </div>

    </section>

    <section id ="contacts">
      <div className='telephone'>
        <img src={telephone} alt='telephone'/>
        <p>06 95 62 96 48</p>
      </div>

      <div>
        <img src = {email} alt= 'email'/>
        <p>manakabamba@gmail.com</p>
      </div>

      <div  className='github'>
        <a href ='https://github.com/Manadev5/'>
        <img src = {github} alt= 'github'/>
        <p>Github</p>
        </a>
      </div>

      <div className='linkedin'>
        <a href ='https://www.linkedin.com/in/manass%C3%A8-mukenge-29b5a6235?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6PGtiCbdTUyhIYzi33SWjg%3D%3D'>
        <img src = {linkedin} alt= 'linkedin'/>
        <p>Linkedin</p>
        </a>
      </div>


    </section>
  </main>
  )
}

export default HomePage;
