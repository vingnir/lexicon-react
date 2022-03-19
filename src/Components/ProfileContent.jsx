import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import React, { useState } from "react";
import { ProfileData } from "./ProfileData";
import { callMsGraph } from "./graph";


function ProfileContent() {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);

    const name = accounts[0] && accounts[0].name; 

    function RequestProfileData() {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };

        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response) => {
            callMsGraph(response.accessToken).then(response => setGraphData(response));
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                callMsGraph(response.accessToken).then(response => setGraphData(response));
            });
        });
    }

    return (
      <>
        <span className="nav-item">{name}</span>
      </>
    );
};

export default ProfileContent;
