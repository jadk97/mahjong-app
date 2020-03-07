import React from "react";
import { useHistory } from "react-router-dom";

const TitleScreen = (props) => {
  const history = useHistory();
  function submitHandler(){

  }
  return (
    <div>
    <h1>Welcome to Damaten</h1>
    <form onSubmit={submitHandler}>
    <button onClick={() => history.push("/room/1")}>Join Room</button>
    </form>
    </div>
  )
}

export default TitleScreen;