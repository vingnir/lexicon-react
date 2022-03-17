import React from 'react'
import { useNavigate } from "react-router-dom";


function PeopleDetails() {
     let navigate = useNavigate();
  return (
    <div className="people-details">
      <div>People details</div>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
          Home
      </button>
    </div>
  );
}

export default PeopleDetails