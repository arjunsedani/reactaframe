import React from "react";
import scenegltf from "./scene.glb";

const AFRAME = window.AFRAME;


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
          // event-set__enter="_event: mouseenter; material.color: yellowgreen; scale: 3 1 1"
          event-set__enter={`_event: mouseenter; _target: #cylinderText; rotation:40 40 0`}
          event-set__leave="_event: mouseleave; material.color: skyblue; scale: 1 1 1">
        ></a-entity>
        <a-box id="cylinderText" position="0 3.5 -2" rotation="30 30 0" color="skyblue" event-set__enter="_event: mouseenter; material.color: yellowgreen; scale: 3 1 1" event-set__leave="_event: mouseleave; material.color: skyblue; scale: 1 1 1" scale="" visible="" material="" geometry="">
            <a-animation attribute="rotation" begin="click" dur="500" fill="backwards" to="30 30 360"></a-animation>
         </a-box>
           {/* <a-camera look-controls-enabled="false"></a-camera> */}
        <a-camera>
          {/* <a-cursor
            position="0 0 -1"
            geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
            material="color: cyan; shader: flat"
            raycaster="objects: .clickable"
          ></a-cursor> */}
           <a-entity cursor="fuse: true; maxDistance: 30; timeout: 500"
            position="0 0 -1"
            geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
            material="color: white; shader: flat">
          </a-entity>
        </a-camera>
      </a-scene>
    </div>
  );
}

export default App;
