function PersonItem(props) {

    var rndNumber = Math.floor(Math.random() * 30) + 1;
    var gender;
    if(Math.random() >= 0.5){
        gender = 'female/'
    }
    else gender = 'male/';
    
    var rndImage =
      "https://minimaltoolkit.com/images/randomdata/"
       + gender
       + rndNumber
       + '.jpg';
   
return (
  <>
    <div className="card col-md-4 m-4 p-4" style={{ width: "12rem" }}>
      <img
        className="img"
        style={{ borderRadius: "50%" }}
        src={rndImage}
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">Name</h5>
        <p>{props.name}</p>
        <hr />
        <div>
          <h6>
            <span className="badge bg-secondary">Id: </span>
            <span className="badge bg-secondary">{props.id}</span>
          </h6>
        </div>
        <hr />
        <h6>
          <span className="badge bg-secondary">Phone: </span>
          <span className="badge bg-secondary">{props.phoneNumber}</span>
        </h6>
        <div>Phone: {props.phoneNumber}</div>
        <hr />
        <div>City: {props.cityName}</div>
        <hr />
        <div>Country: {props.countryName}</div>
        <hr />
        <div>Language: {"not set"}</div>
      </div>
    </div>
  </>
);
}

export default PersonItem;