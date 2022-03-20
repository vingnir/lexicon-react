import React from 'react'
import { AddPersonForm } from '../Components/AddPersonForm'
import { useNavigate } from "react-router-dom";


function AddPerson() {
  let navigate = useNavigate();
  let [error, setError] = React.useState(null);
  function addPersonHandler(personData) {
    const url = "https://lexicon-reactwebapi.azurewebsites.net/api/person";
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(personData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(url, requestOptions)
      .then((response) => console.log("Submitted successfully", response))
      .catch((error) => console.log("Form submit error", error));
      
      if (error) {
        setError(error);
      } else {
        navigate("/people");
      }
  }

  return (
    <div className="container">
      <div className="row justify-content-center m-4">
        <div className="col-4">
          <h2> Add new Person</h2>
        </div>
      </div>
      <AddPersonForm onAddPerson={addPersonHandler} />
    </div>
  );
}

export default AddPerson