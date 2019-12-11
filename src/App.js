import React from "react";
import scenegltf from "./scene.glb";

const AFRAME = window.AFRAME;


function App() {
  const handlePopoverOpen = event => {
    console.log("called this");
  };

  AFRAME.registerComponent('spot',{
    schema:{
      linkto:{type:"string",default:""},
      spotgroup:{type:"string",default:""}
    },
    init:function(){
        console.log("called this 2");
      //add image source of hotspot icon
      this.el.setAttribute("src","#hotspot");
      //make the icon look at the camera all the time
      this.el.setAttribute("look-at","#cam");
      
      var data=this.data;
      
      this.el.addEventListener('click',function(){
        console.log("called this click");
        //set the skybox source to the new image as per the spot
        var heart=document.getElementById("heart");
        heart.setAttribute("animation", "property: rotation; to: 0 360 0; loop: true; dur: 10000");
      });
    }
  });
  
  return (
    <div className="App">
      <a-scene background="color: #555555">
        <a-entity light="type: ambient; intensity:2.8; color: #C8C8FF"></a-entity>
        <a-entity
          light="type: spot; intensity:.3; "
          position="1.1 2.7 1"
        ></a-entity>
          <a-entity
          id="heart"
          spot=""
          gltf-model={scenegltf}
          position="0 -2.930 -29"
          click-drag=""
          wasd-controls="acceleration: 400; wsEnabled: true"
          // scale="0.1 0.1 0.1"
          rotation="0 0 0" 
          // animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
          rotate-on-click="_animate: true;"
          // event-set__enter="_event: mouseenter; material.color: yellowgreen; scale: 3 1 1"
          event-set__enter={`_event: mouseenter; _target: #heart; rotation:0 40 0`}
          event-set__leave="_event: mouseleave;  _target: #camera1; postion:0 0 -10">
        >
        </a-entity>
        <a-box id="cylinderText" position="0 3.5 -2" rotation="30 30 0" color="skyblue" event-set__enter="_event: mouseenter; material.color: yellowgreen; scale: 3 1 1" event-set__leave="_event: mouseleave; material.color: skyblue; scale: 1 1 1" scale="" visible="" material="" geometry="">
            <a-animation attribute="rotation" begin="click" dur="500" fill="backwards" to="30 30 360"></a-animation>
         </a-box>
         <a-entity id="receptowork" shadow="receive:false" position="0.020 -3.090 -5.953" rotation="-90 0 0"  geometry="primitive:ring" material="emissive:#ffffff;color:#ffffff;side:double;transparent:true" text__text="width:5;value:WORK;letterSpacing:1;align:center;color:#00ff00;lineHeight:50;side:double" scale="0.3 0.3 0.3"></a-entity>
           {/* <a-camera look-controls-enabled="false"></a-camera> */}
        <a-camera id="camera1">
             <a-entity cursor="fuse:true;fuseTimeout:2000"
                  geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.02"
                  position="0 0 -1.8"
                  material="shader:flat;color:#ff0000"
                  animation__mouseenter="property:scale;to:3 3 3;startEvents:mouseenter;endEvents:mouseleave;dir:reverse;dur:2000;loop:1">
          </a-entity>
        </a-camera>
      </a-scene>
    </div>
  );
}

export default App;
