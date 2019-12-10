import React from "react";
import scenegltf from "./scene.glb";

function App() {
  const handlePopoverOpen = event => {
    console.log("called this");
  };

  return (
    <div className="App">
      <a-scene background="color: #555555">
        <a-entity light="type: ambient; intensity:2.8; color: #C8C8FF"></a-entity>
        <a-entity
          light="type: spot; intensity:.3; "
          position="1.1 2.7 1"
        ></a-entity>
        <a-entity
          gltf-model={scenegltf}
          position="0 -2.930 -29"
          click-drag=""
          wasd-controls="acceleration: 400; wsEnabled: true"
          // scale="0.1 0.1 0.1"
          rotation="0 0 0"
          rotate-on-click="_animate: true;"
        ></a-entity>
           {/* <a-camera look-controls-enabled="false"></a-camera> */}
        <a-camera>
          <a-cursor
            position="0 0 -1"
            geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
            material="color: cyan; shader: flat"
            raycaster="objects: .clickable"
          ></a-cursor>
        </a-camera>
      </a-scene>
    </div>
  );
}

export default App;
