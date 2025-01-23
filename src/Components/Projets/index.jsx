import { useState } from "react";
import Right from '../../Assets/Vector-right.png';
import Left from '../../Assets/Vector-left.png';

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
      {showDetails && (
        <div className="details">
          <p>{data.description}</p>
          <ul className="comp-list">{
            data.competences.map((data) => (
              <li>{data}</li>
            ))}
          </ul>
        </div>
      )}
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