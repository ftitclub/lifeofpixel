import React from "react";
import SceneObject from "../../SceneObject";

const Intro = React.memo(props => (
  <SceneObject
    name="Thanks"
    transform={{
      position: props.transform.position,
      scale: { x: 425, y: 450 },
      rotation: props.transform.rotation
    }}
  >
    <h2 style={{ color: "black" }}>Welcome to Life of Pixel, NFT based exploration Game</h2>
    <h3 style={{ color: "black" }}><a href="https://app.uniswap.org/#/swap" target={"_blank"}>BUY HERE</a></h3>
    <h3 style={{ color: "black" }}><a href="dextools.io/" target={"_blank"}>CONTRACT</a></h3>
  </SceneObject>
));
export default Intro;
