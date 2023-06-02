import data from "../list.json";
import React from "react";
import { useNavigate } from "react-router-dom";
import homeStyles from "../css/Home.module.css";
import Card from "./Card";


function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="p-4">
          <div>
            <h1 className={homeStyles.primary}>Cricket Mania</h1>
          </div>

          <div>
            <p className={homeStyles.para}>
              Interesting Facts " Rohit Sharma and Shane Watson are the only two
              players to score a century and claim a hat-trick in the IPL."
            </p>
          </div>

          <div>
            <button
              className="btn btn-success"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          </div>
          <div>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/signup")}
            >
              SignUp
            </button>
          </div>
        </div>
        <div>
          <div className={homeStyles.cardsContainer}>
          {data.map((player) => {
            return <Card key={player.id} id={player.id} image={player.image} name={player.name} team={player.team}/>
          })}
        </div>
        </div>
        
      </div>
    </>
  );
}

export default Home;
