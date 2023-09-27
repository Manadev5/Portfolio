import { useState } from "react";
import Right from '../../Assets/Vector-right.png'
import Left from '../../Assets/Vector-left.png'
function Projets({Datas ,index}){

    const [currentIndex, setCurrentIndex] = useState(0);
   
    const goForward = (i) =>{

     const lastSlide = currentIndex === Datas.length - 1;
     const newIndex= lastSlide ? 0 : currentIndex + 1;
     setCurrentIndex(newIndex)

    };

    const goBackward = (i) => {
        const firstSlide = currentIndex === 0;
        const newIndex= firstSlide ? Datas.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex)

        
    }
   console.log(index + 1)

   index = currentIndex;


return(
 
  
    <div key ={Datas.id} className="image-container" >
      <div className="slider">
        <img src = {Left} alt='vector-left' onClick= {()  => (goBackward(index))}  className='vector-left'/>
        
          <img src = {Datas[index].cover} alt={Datas[index].title} className='image-slider'/>

          <img src = {Right} alt='vector-right' onClick= {()  => (goForward(index))} className='vector-right'/>
         
          </div>
          
        
      <div className="content">
        <h3>{Datas[index].title}</h3>
        <h5 className="description">{Datas[index].description}</h5>

        <div className="link">
        <h4 className="link-title">Lien github :</h4>
        <a href ={Datas[index].link}> cliquer ici</a>
        </div>

        <h4 className="title-comp">Technologies employées</h4>
        
        <ul>
          {Datas[index].competences.map((text) =>( <li key ={text + Math.random }>{text}</li> ))}
        </ul>
        <h4 className="title-comp">Problémes & solutions</h4>
        <p>{Datas[index].problems}</p>
        </div>

       
     

    </div>

)

}

export default Projets