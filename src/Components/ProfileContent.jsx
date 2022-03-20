import { useMsal } from "@azure/msal-react";
// import { loginRequest } from "../authConfig";
import React from "react";

function ProfileContent() {
    const { accounts } = useMsal();
    // const [graphData, setGraphData] = useState(null);

    const name = accounts[0] && accounts[0].name; 

    return (
      <>
        <span className="nav-item">{name}</span>
      </>
    );
};

export default ProfileContent;
