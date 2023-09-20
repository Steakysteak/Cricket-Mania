import React, { useState } from "react";
import cardStyles from "../css/Card.module.css";
import { useNavigate } from "react-router-dom";
import { add, remove } from "../redux/teamSlice";
import { useDispatch, useSelector } from "react-redux";

function Card({ image, name, team, id }) {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch(false);
  const t = useSelector((state) => state.team);

  const navigate = useNavigate();

  const clickHandler = (id) => {
    navigate(`/${id}`);
  };

  const modalClickHandler = () => {
    setModal(!modal);
  };

  const addPlayer = () => {};
  return (
    <div style={{ margin: "20px" }} onClick={() => modalClickHandler()}>
      <div className={cardStyles.card}>
        <img src={image} alt="Avatar" className={cardStyles.im} />
        <div className={cardStyles.container}>
          <h4>
            <b>{name}</b>
          </h4>
          <p>{team}</p>
          <button className="btn btn-info" onClick={() => clickHandler(id)}>
            Details
          </button>
        </div>
      </div>

      {modal && (
        <div className={cardStyles.modal}>
          <div className={cardStyles.modalContent}>
            <h6>Modal</h6>
            <div>
              Player Name: <p>{name}</p>
            </div>
            <div>
              <button
                className="btn btn-info mr-auto"
                onClick={() => dispatch(add({ image, name, team, id }))}
              >
                Add Player to Team
              </button>
              <button
              className="btn btn-primary"
              onClick={() => dispatch(remove(id))} 
              >
                Remove Player from Team 
              </button>
              <button
                className="btn btn-danger"
                onClick={() => modalClickHandler()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
