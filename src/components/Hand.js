import React from "react";
import Tile from "./Tile";
let STARTING_HAND = ["1M", "2M", "3M", "4P", "5P", "6P", "2S", "3S", "4S", "E", "E", "GD", "GD"]

const Hand = (props) => {
return (
  <div className="hand">
    {STARTING_HAND.map((tile) => <Tile tile={tile}/>)}
  </div>
)

}

export default Hand;