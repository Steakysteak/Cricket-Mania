import React, { useEffect, useState } from "react";
import data from "../list.json";
import { useNavigate, useParams } from "react-router-dom";

function PlayerDetail() {
  const { playerid } = useParams();
  const navigate = useNavigate();

  const [playerDetail, setPlayerDetail] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const ply = data.find((player) => player.id == playerid);
    if (ply) {
      setPlayerDetail(ply);
    }else{
        setError(true);
    }
  }, [playerid]);

  return (
    <>
      
      {!error && 
      <div>
        <div>PlayerDetail</div>
        Name: {playerDetail.name}
      </div>
      }
      {error && 
      <div>
        Something Went Wrong
        <button onClick={() => {
            navigate('/');
        }} >Go To Home</button>
      </div>
      }
    </>
  );
}

export default PlayerDetail;
