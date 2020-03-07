import React from "react";
import "./Tile.css";
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../assets/tiles', false, /\.(png|jpe?g|svg)$/));

const Tile = (props) => {
  console.log(images);
  console.log(props.tile)
  return (
    <img className="tile" alt={props.tile} src={images[`${props.tile}.png`]}/>
  )
}

export default Tile;