import React from "react";
import { useState } from "react";

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
      `https://lexicon-reactwebapi.azurewebsites.net/api/person/${userinput}`
    );
    props.onSubmit(res.data);
    const clean = () => changeValue("");
    clean();
  }
  return (
    <div>
      <div style={{ textAlign: "center", fontWeight: "bolder", fontSize: 30 }}>
        {" "}
        Add new person
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userinput}
          placeholder="Search id"
          required
          onChange={(e) => changeValue(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
}
function Card(props) {
  const profile = props;
  return (
    <div className="card">
      <div className="card-body">
        <img alt="" src={"https://picsum.photos/100/100?grayscale"} />

        <div className="name">Name: {profile.name}</div>
        <div className="phoneNumber">Phone: {profile.phoneNumber}</div>
      </div>
    </div>
  );
}
function PeopleSearch() {
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

export default PeopleSearch;
