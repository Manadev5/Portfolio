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
      <div onClick={toggleDetails}>
        <h3 className="item-title">{data.title}</h3>
      </div>
      {showDetails && (
        <div className="details">
          <img src={data.cover} alt={data.title} />
          <p>{data.description}</p>
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