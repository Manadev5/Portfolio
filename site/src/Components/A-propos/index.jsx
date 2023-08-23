import Tech from '../../Assets/tech.png';

function aPropos() {

return(

<section id="A-propos">

<h2 className='titre-2'> À propos de moi </h2>

<img src={Tech} alt ='tech'/>

  <p>Passionné par la tech après le Bac j'ai voulu expérimenter quelque chose de nouveau dans ma vie.
    C'est en m'informant que j'ai connu le développement web, en voyant les lignes de code qui 
    compose une page web j'étais fascine même si je n'y comprenais rien du tout.
    Grâce à une formation j'ai pu apprendre le HTML5, CSS3; 
    Javascript et des frameworks de JavaScript comme React.js et Express.js. 
    je souhaite désormais travailler dans le développement web afin d'enrichir mes connaissances 
    et compétences et gagner de l'expérience dans ce domaine.

     </p>

</section>

)

}

export default aPropos;