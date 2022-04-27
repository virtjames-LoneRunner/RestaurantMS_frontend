import React from "react";
import Header from "../components/Header";

function Chef() {
  let auth = localStorage.getItem("auth");
  return (
    <div>
      <Header role="chef" auth={auth} />
    </div>
  );
}

export default Chef;
