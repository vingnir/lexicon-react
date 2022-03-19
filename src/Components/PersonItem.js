import Card from "./Card";

function PersonItem(props) {
return (
  <li>
    <Card>
      <div>
        <img alt="" src={"https://picsum.photos/100/100?grayscale"} />
        <div>Id: {props.id}</div>
        <div>Name: {props.name}</div>
        <div>Phone: {props.phoneNumber}</div>
        <div>City: {props.cityName}</div>
        <div>Country: {props.countryName}</div>
        <div>Language: {"not set"}</div>
      </div>
    </Card>
  </li>
);
}

export default PersonItem;