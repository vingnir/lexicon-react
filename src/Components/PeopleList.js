import { react } from "react";
import PersonItem from "./PersonItem";

function PeopleList(props) {
    return (
      <ul>
        {props.people.map((person) => (
          <PersonItem
            key={person.id}
            id={person.id}
            phoneNumber={person.phoneNumber}
            cityName={person.cityName}
            countryName={person.countryName}
          />
        ))}
      </ul>
    );

}

export default PeopleList;