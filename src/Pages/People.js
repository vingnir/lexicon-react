import React from 'react'
import { useNavigate } from 'react-router-dom';

function People() {
  let navigate = useNavigate();
  return (
    <div className="people">
      <h1>People</h1>
      <button
      onClick={() => {
        navigate("/languages");
      }}
      >
        {" "}
        Languages
      </button>
    </div>
  );
}

export default People