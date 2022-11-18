import React from "react";
import SceneObject from "../../SceneObject";
import Thanks from "./Thanks";
import EndText from "./EndText";
import { BrowserView, MobileView } from 'react-device-detect';

const visibleRange = [26000, 30000];

const EndGroundLayer = React.memo(props => {
  if (!(visibleRange[0] <= props.scroll && props.scroll < visibleRange[1]))
    return <div />;
  return (
    <SceneObject {...props} name="End Ground Layer">
      <BrowserView>
        <EndText transform={{ position: { x: 2000, y: 2500 } }} />
      </BrowserView>
      <MobileView>
        <EndText transform={{ position: { x: 2000, y: 3350 } }} />
      </MobileView>
    </SceneObject>
  );
});

export default EndGroundLayer;
