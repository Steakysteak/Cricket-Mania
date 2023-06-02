import React, { useEffect, useState } from "react";
import data from "../list.json";
import { useNavigate, useParams } from "react-router-dom";
import playerDetailStyles from '../css/PlayerDetail.module.css';


function PlayerDetail() {
  const { playerid } = useParams();
  const navigate = useNavigate();

  const [playerDetail, setPlayerDetail] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const ply = data.find((player) => player.id == playerid);
    const dcPly = JSON.parse(JSON.stringify(ply));
    if (ply) {
      setPlayerDetail(dcPly);
    } else {
      setError(true);
    }
  }, [playerid]);

  return (
    <>
      {!error && (
        <div>
          <div className={playerDetailStyles.title}>PlayerDetail</div>
          <span><h6 className={playerDetailStyles.subtitle}>Name:</h6>{playerDetail.name}</span>
          <br />
          <div>
            <span><h6 className={playerDetailStyles.subtitle}>Test Score:</h6>{playerDetail?.score?.Test}</span>
          </div>
          <div>
            <span><h6 className={playerDetailStyles.subtitle}>ODI Score:</h6> {playerDetail?.score?.ODI}</span>
          </div>
          <div>
            <span><h6 className={playerDetailStyles.subtitle}>T20I Score:</h6> {playerDetail?.score?.T20I}</span>
          </div>
          <br />
          <span>Name: {playerDetail.name}</span>
        </div>
      )}
      {error && (
        <div>
          Something Went Wrong
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Go To Home
          </button>
        </div>
      )}
    </>
  );
}

export default PlayerDetail;
