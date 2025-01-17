import { useState } from "react";
import Right from '../../Assets/Vector-right.png'
import Left from '../../Assets/Vector-left.png'
function Projets({Datas }){

  //   const [currentIndex, setCurrentIndex] = useState(0);
   
  //   const goForward = (i) =>{

  //    const lastSlide = currentIndex === Datas.length - 1;
  //    const newIndex= lastSlide ? 0 : currentIndex + 1;
  //    setCurrentIndex(newIndex)

  //   };

  //   const goBackward = (i) => {
  //       const firstSlide = currentIndex === 0;
  //       const newIndex= firstSlide ? Datas.length - 1 : currentIndex -1;
  //       setCurrentIndex(newIndex)

        
  //   }

  //  index = currentIndex;



return(

      
  <div>  
  <ul>{  Datas.map((data)=>(
    <li>
      <div>{data.title}</div>
      <div>
        <img src={data.cover} alt ={data.title}/>
        <p>{data.description}</p>
      </div>
    </li>
  ))}</ul>

  {/* <div key ={Datas.id} className="image-container" >
      <ul>
      </ul>
      <div className="slider">
        <img src = {Left} alt='vector-left' onClick= {()  => (goBackward(index))}  className='vector-left'/>
        
          <img src = {Datas[index].cover} alt={Datas[index].title} className='image-slider'/>

          <img src = {Right} alt='vector-right' onClick= {()  => (goForward(index))} className='vector-right'/>
         
      </div>
          
        
      <div className="content">
        <h3>{Datas[index].title}</h3>
        <h5 className="description">{Datas[index].description}</h5>

        <div className="link">
          <a href ={Datas[index].link}>Voir le code sur github</a>
        </div>

      </div>

       
     

    </div> */}
    </div> 

)

}

export default Projets