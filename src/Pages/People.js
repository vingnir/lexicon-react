import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import "../Components/People.css";

const axios = require("axios").default;


function CardList(props) {
  return (
    <div>
      {props.profiles.map((profile) => (
        <Card {...profile} />
      ))}
    </div>
  );
}
function Form(props) {
  const [userinput, changeValue] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    const res = await axios.get(
      `https://localhost:7042/api/Person/${userinput}`
    );
    props.onSubmit(res.data);
    const clean = () => changeValue("");
    clean();
  }
  return (
    <div>
      <div style={{ textAlign: "center", fontWeight: "bolder", fontSize: 30 }}>
        {" "}
        Add GitHub Users:
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userinput}
          placeholder="GitHub UserName..."
          required
          onChange={(e) => changeValue(e.target.value)}
        />
        <button>Add User</button>
      </form>
    </div>
  );
}
function Card(props) {
  const profile = props;
  return (
    <div className="github-profile">
      <img src={profile.avatar_url} />
      <div className="info">
        <div className="name">{profile.name}</div>
        <div className="phoneNumber">{profile.phoneNumber}</div>
      </div>
    </div>
  );
}
function People() {
  const [userprofiles, addprofile] = useState([]);
  const updatedprofiles = (profiledata) =>
    addprofile([...userprofiles, profiledata]);
  return (
    <div>
      <Form onSubmit={updatedprofiles} />
      <CardList profiles={userprofiles} />
    </div>
  );
}

export default People