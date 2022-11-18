import React from "react";
import SceneObject from "../../SceneObject";

const Brief = React.memo(props => (
    <SceneObject
        name="Thanks"
        transform={{
            position: props.transform.position,
            scale: { x: 425, y: 450 },
            rotation: props.transform.rotation
        }}
    >
        <h2 style={{ color: props.font.color }}>{props.content.h1}</h2>
        <h3 style={{ color: props.font.color }}>{props.content.h2}</h3>
    </SceneObject>
));
export default Brief;
