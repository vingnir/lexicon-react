import React from "react";
import { useState} from 'react';
import { useEffect } from "react";
import PeopleList from '../Components/PeopleList';

function People(){
const [isLoading, setIsLoading] = useState(true);
const [loadedPeople, setLoadedPeople] = useState([]);

useEffect(() => {
  setIsLoading(true);
  fetch("https://lexicon-reactwebapi.azurewebsites.net/api/person").then(
    (response) => {
      response.json()
      .then((data) => {
        const people = [];
        for (const key in data)
        {
          const person = {
            id: key,
            ...data[key]
          };
          people.push(person);
        }
        setIsLoading(false);
        setLoadedPeople(people);
      });
    }
  );
}, []);
 

 if (isLoading) {
   return (
     <section>
       <p>Loading...</p>
     </section>
   )
 }

 return (
   <div className="container">
     <div className="row justify-content-center m-3">
       <h1 className="text-center">People</h1>
     </div>
     <div className="row">
       <PeopleList people={loadedPeople} />
     </div>
   </div>
 );
}

export default People;