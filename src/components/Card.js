import React from 'react'
import '../css/Card.css';
import { useNavigate } from 'react-router-dom';

function Card({image, name, team, id}) {

  const navigate = useNavigate();

  const clickHandler = (id) => {
    navigate(`/${id}`)

  };

  return (
     <div style={{margin: "auto"}} onClick={() => clickHandler(id)}>
      <div className="card">
          <img src={image} alt="Avatar" className='im'/>
          <div className="container">
           <h4><b>{name}</b></h4>
           <p>{team}</p>
          </div>
      </div>
      </div>  
    
  )
}

export default Card
