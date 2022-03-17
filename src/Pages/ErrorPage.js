import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  let navigate = useNavigate();
  return (
    <div className="error-page">
      <h1>There's nothing here: 404!</h1>
      <div
        onClick={() => {
          navigate("/home");
        }}
      >
        Home
      </div>
    </div>
  );
}

export default ErrorPage;
