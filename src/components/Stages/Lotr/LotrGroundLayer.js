import React from "react";
import SceneObject from "../../SceneObject";
import HobbitHole from "./HobbitHole";
import Tree from "./Tree";
import Frodo from "./Frodo";
import Intro from '../../../components/Stages/End/Intro';
import { BrowserView, MobileView } from 'react-device-detect';
import Brief from "../End/Brief";


const visibleRange = [0, 8050];

const LotrGroundLayer = React.memo(props => {
  if (!(visibleRange[0] <= props.scroll && props.scroll < visibleRange[1]))
    return <div />;
  return (
    <SceneObject {...props} name="Lotr Ground Layer">
      <SceneObject
        name="GRASS"
        color="#4bab3e"
        transform={{
          position: { x: -1500, y: -700 },
          scale: { x: 6500, y: 800 }
        }}
      />
      <SceneObject
        transform={{ position: { x: -500, y: 20 }, scale: { x: 2000, y: 100 } }}
      >
        <h2 style={{ color: "#11722E" }}>Scroll or press space</h2>
      </SceneObject>
      <Tree transform={{ position: { x: 700, y: 35 } }} type="2" />
      <Tree transform={{ position: { x: 970, y: 35 } }} type="3" />
      <Tree transform={{ position: { x: 1300, y: 35 } }} type="1" />
      <Tree
        transform={{ position: { x: 1650, y: 35 }, scale: { x: 600, y: 703 } }}
        type="6"
      />
      <Tree transform={{ position: { x: 2000, y: 35 } }} type="4" />
      <Tree transform={{ position: { x: 2000, y: 35 } }} type="4" />
      <HobbitHole
        transform={{ position: { x: 1500, y: 99 }, scale: { x: 1000, y: 323 } }}
        type="1"
      />

      <BrowserView>
        <Intro transform={{ position: { x: 100, y: 250 } }} />
        <Brief font={{ color: "black" }} content={{ h1: 'Mint NFTs, explore, conquer', h2: 'Win rewards!' }} transform={{ position: { x: 1800, y: 250 } }} />
        {/* <Brief font={{ color: "black" }} content={{ h1: 'Follow our socials:', h2: '6% marketing, 2% LP, 2% development' }} transform={{ position: { x: 3000, y: 250 } }} /> */}
        <SceneObject
          name="Thanks"
          transform={{
            position: {x: 3000, y: 250},
            scale: { x: 425, y: 450 },
          }}
        >
          <h2 style={{ color: "black" }}>Important links:</h2>
          <h3 style={{ color: "blue" }}><a style={{ textDecoration: "none", color:"yellow" }} href="https://twitter.com/lifeofpixelerc" target={"_blank"}>TWITTER</a></h3>
        </SceneObject>
        <Brief font={{ color: "black" }} content={{ h1: 'Beware, Tokenomics incoming!' }} transform={{ position: { x: 4800, y: 250 } }} />
      </BrowserView>
      <MobileView>
        <Intro transform={{ position: { x: -200, y: 1000 } }} />
        <Brief font={{ color: "black" }} content={{ h1: 'Mint NFTs, explore, conquer', h2: 'Win rewards!' }} transform={{ position: { x: 1700, y: 1000 } }} />
        <SceneObject
          name="Thanks"
          transform={{
            position: {x: 3200, y: 1000},
            scale: { x: 425, y: 450 },
          }}
        >
          <h2 style={{ color: "black" }}>Important links:</h2>
          <h3 style={{ color: "blue" }}><a style={{ textDecoration: "none", color:"yellow" }} href="https://twitter.com/lifeofpixelerc" target={"_blank"}>TWITTER</a></h3>
        </SceneObject>
        <Brief font={{ color: "black" }} content={{ h1: 'Tokenomics incoming!'  }} transform={{ position: { x: 4800, y: 1000 } }} />
      </MobileView>
      <Tree
        transform={{ position: { x: 3300, y: 47 }, scale: { x: 400, y: 503 } }}
        type="1"
      />
      <Tree transform={{ position: { x: 3500, y: 35 } }} type="3" />
      <Tree
        transform={{ position: { x: 3800, y: -27 }, scale: { x: 600, y: 803 } }}
        type="6"
      />
      <Tree transform={{ position: { x: 4100, y: 35 } }} type="2" />
      <Frodo
        transform={{ position: { x: 3950, y: 100 }, scale: { x: 600, y: 803 } }}
        canPlay={3700 < props.scroll}
      />
    </SceneObject>
  );
});

export default LotrGroundLayer;
