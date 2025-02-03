import { useState } from "react";

const ListItem = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <li className="full-item">
      <div>
        <div className="title-icon">
          <h3 className="item-title">{data.title}</h3>
          <i className={showDetails? "fa-solid fa-minus" : "fa-solid fa-plus"} onClick={toggleDetails}></i>
        </div>
        <div className="blueline"></div>
      </div>
        <div className={ showDetails? "details" : "details-none"}>
          <h4>Description :</h4>
          <p>{data.description}</p>
          <h4>Technos :</h4>
          <ul className="comp-list">{
            data.competences.map((data) => (
              <li>{data}</li>
            ))}
          </ul>
          <img src={data.cover} alt={data.title}/>
          <a href={data.link} target="blank">voir sur github</a>
        </div>
      <div className="line-blue"></div>
    </li>
  );
};

function Projets({Datas}){   
  
  return (
    <div>
      <ul className="projects-list">
        {Datas.map((data, index) => (
          <ListItem key={index} data={data} />
        ))}
      </ul>
    </div>

)

}

export default Projets