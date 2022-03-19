import React from 'react'
import { AddPersonForm } from '../Components/AddPersonForm'

function AddPerson () {
function addPersonHandler(personData){
  fetch("https://lexicon-reactwebapi.azurewebsites.net/api/person",
  {
    method: 'POST',
    body: JSON.stringify(personData),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  );
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