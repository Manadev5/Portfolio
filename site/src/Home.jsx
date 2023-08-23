import Header from "./Components/Header";
import Competences from "./Components/Competences";
import APropos from "./Components/A-propos";
import Projets from './Components/Projets';
import {Datas} from './Datas/DataProjects';
import Contact  from './Components/Contact';
import './Components/Style/Home.css';





function HomePage() {

  return (
  <main >
        <Header/>
     <section id="Accueil">


   
      <div className="text-block">
         <h1>Je suis Manassé Mukenge - développeur web frontend </h1>
      </div>

    </section>
   <APropos />
    
   <Competences />
  

    <section id="projets">

      <h2>Mes Projets</h2>

      <div className='images'>
      
      
         <Projets

            Datas ={Datas}
    
         />
    
      </div>

    </section>

    <footer>

    <h2>Me contacter</h2>

      <Contact />

    </footer>

   
  </main>
  )
}

export default HomePage;
