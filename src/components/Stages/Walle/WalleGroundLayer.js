import React from "react";

import SceneObject from "../../SceneObject";

import Elevator from "./Elevator";
import Trash from "./Trash";

import { BrowserView, MobileView } from 'react-device-detect';
import Intro from '../../../components/Stages/End/Intro';
import Brief from "../End/Brief";

const visibleRange = [7050, 19650];

const WalleGroundLayer = React.memo(props => {
  if (!(visibleRange[0] <= props.scroll && props.scroll < visibleRange[1]))
    return <div />;
  return (
    <SceneObject {...props} name="Walle Ground Layer">
    <BrowserView>
      <Brief font={{color: "black"}} content={{ h1: 'ROADMAP' }} transform={{ position: { x: 100, y: 250 } }} />
      <Brief font={{color: "black"}} content={{ h1: 'NFT mint', h2: 'Creating and minting pixel NFTs' }} transform={{ position: { x: 1800, y: 250 } }} />
      <Brief font={{color: "black"}} content={{ h1: 'Game development', h2: 'Building an NFT based pixel exploration game' }} transform={{ position: { x: 3000, y: 250 } }} />
      <Brief font={{color: "black"}} content={{ h1: 'Pixelverse', h2: 'Creating unique pixel metaverse layer' }} transform={{ position: { x: 4500, y: 250 } }} />
    </BrowserView>
    <MobileView>
      <Brief font={{color: "black"}} content={{ h1: 'ROADMAP' }} transform={{ position: { x: 100, y: 1000 } }} />
      <Brief font={{color: "black"}} content={{ h1: 'NFT mint', h2: 'Creating and minting pixel NFTs' }} transform={{ position: { x: 1800, y: 1000 } }} />
      <Brief font={{color: "black"}} content={{ h1: 'Game development', h2: 'Building an NFT based pixel exploration game' }} transform={{ position: { x: 3000, y: 1000 } }} />
      <Brief font={{color: "black"}} content={{ h1: 'Pixelverse', h2: 'Creating unique pixel metaverse layer' }} transform={{ position: { x: 4500, y: 1000 } }} />
    </MobileView>
      <SceneObject
        name="WALLEGROUND"
        color="moccasin"
        transform={{
          position: { x: 0, y: -1850 },
          scale: { x: 5100, y: 1977 }
        }}
      />
      <SceneObject
        name="WALLEGROUND"
        color="moccasin"
        transform={{
          position: { x: 5075, y: 66.5 },
          scale: { x: 50, y: 50 },
          rotation: 45
        }}
      />
      <Elevator transform={{ position: { x: -100, y: -1700 } }} />
      <Trash transform={{ position: { x: 700, y: 127 } }} />
      <Trash transform={{ position: { x: 1502, y: 127 }, rotation: 90 }} />
      <Trash transform={{ position: { x: 1650, y: 127 } }} />
      <Trash transform={{ position: { x: 1798, y: 127 }, rotation: 270 }} />
      <Trash transform={{ position: { x: 2600, y: 127 } }} />
      <Trash transform={{ position: { x: 2750, y: 127 }, rotation: 180 }} />
      <Trash transform={{ position: { x: 3502, y: 127 }, rotation: 180 }} />
      <Trash transform={{ position: { x: 3650, y: 127 } }} />
      <Trash transform={{ position: { x: 3798, y: 127 }, rotation: 270 }} />
    </SceneObject>
  );
});

export default WalleGroundLayer;
