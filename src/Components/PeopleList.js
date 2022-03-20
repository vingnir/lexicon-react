import PersonItem from "./PersonItem";

function PeopleList(props) {
    return (
        <>
          {props.people.map((person) => (
            <PersonItem
              key={person.id}
              id={person.id}
              name={person.name}
              phoneNumber={person.phoneNumber}
              cityName={person.cityName}
              countryName={person.countryName}
            />
          ))}
      </>
    );

}

export default PeopleList;