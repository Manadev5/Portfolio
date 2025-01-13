import logoComputer from '../../Assets/logo-pc.png';

function aPropos() {

return(

<section id="A-propos">

  <img src={logoComputer} alt="pc-logo"/>

  <div class="blue-block">

    <h2 className='titre-2'> À propos de moi </h2>

    <p>

    Ma passion pour la création d'interfaces intuitives, d'outils innovants offrant des solutions 
    utiles aux autres, ainsi que mon intérêt pour les nouvelles technologies, m'ont poussé à entreprendre 
    une carrière de développeur web. 
    Grâce aux formations que j'ai suivies pendant 4 ans, j'ai acquis des compétences dans plusieurs langages,
    freameworks et j'ai expérimenté différents outils pour mettre en pratique mes connaissances. 
    J'ai eu l'opportunité de mettre en pratique mes compétences lors d'un stage de 6 mois chez Youzer, 
    une entreprise proposant une solution IAM, une application de rencontres CSP+ pour le fondateur de LesBigBoss,
    ainsi que plusieurs autres projets disponibles sur mon profil GitHub.   
      
    </p>
    
  </div>

</section>

)

}

export default aPropos;