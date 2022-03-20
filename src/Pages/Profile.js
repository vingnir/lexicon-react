import React from "react";
import { useParams } from "react-router-dom";
// import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  // let navigate = useNavigate();
  let { id } = useParams();
  return (
    <div className="profile">
      <h1>Profile page for {id} </h1>
      {/* <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Home
      </button> */}
    </div>
  );
}

export default Profile;
