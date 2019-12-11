import React from "react";
import scenegltf from "./scene.glb";

const AFRAME = window.AFRAME;


function App() {
  const handlePopoverOpen = event => {
    console.log("called this");
  };

  AFRAME.registerComponent('hotspots',{
    init:function(){
        this.el.addEventListener('reloadspots',function(evt){
        
        //get the entire current spot group and scale it to 0
        var currspotgroup=document.getElementById(evt.detail.currspots);
        currspotgroup.setAttribute("scale","0 0 0");
        
        //get the entire new spot group and scale it to 1
        var newspotgroup=document.getElementById(evt.detail.newspots);
        newspotgroup.setAttribute("scale","1 1 1");
      });
    }
  });
  AFRAME.registerComponent('spot',{
    schema:{
      linkto:{type:"string",default:""},
      spotgroup:{type:"string",default:""}
    },
    init:function(){
      
      //add image source of hotspot icon
      this.el.setAttribute("src","#hotspot");
      //make the icon look at the camera all the time
      this.el.setAttribute("look-at","#cam");
      
      var data=this.data;
      
      this.el.addEventListener('click',function(){
        //set the skybox source to the new image as per the spot
        var sky=document.getElementById("skybox");
        sky.setAttribute("src",data.linkto);
        
        var spotcomp=document.getElementById("spots");
        var currspots=this.parentElement.getAttribute("id");
        //create event for spots component to change the spots data
        spotcomp.emit('reloadspots',{newspots:data.spotgroup,currspots:currspots});
      });
    }
  });
  return (
    <div className="App">
     <a-scene background="color: #ECECEC">
      <a-assets>
       <img id="point1" src="https://cdn.glitch.com/2087dfa6-bd02-4451-a189-36095a66f386%2Fpoint1.jpg?1545394470968"/> 
        <img id="point2" src="https://cdn.glitch.com/2087dfa6-bd02-4451-a189-36095a66f386%2Fpoint2.jpg?1545394471327"/> 
        <img id="point3" src="https://cdn.glitch.com/2087dfa6-bd02-4451-a189-36095a66f386%2Fpoint3.jpg?1545394470620"/> 
        <img id="point4" src="https://cdn.glitch.com/2087dfa6-bd02-4451-a189-36095a66f386%2Fpoint4.jpg?1545394470510"/> 
        
        <img id="hotspot" src="https://cdn.glitch.com/2087dfa6-bd02-4451-a189-36095a66f386%2Fup-arrow.png?1545397127546"/>
      </a-assets>
      
      <a-entity id="spots" hotspots>
        <a-entity id="group-point1">
          <a-image spot="linkto:#point2;spotgroup:group-point2" position="-4 0 10"></a-image>
        </a-entity>
        <a-entity id="group-point2" scale="0 0 0">
          <a-image spot="linkto:#point1;spotgroup:group-point1" position="10 0 -8"></a-image>
          <a-image spot="linkto:#point3;spotgroup:group-point3" position="0 0 10"></a-image>
        </a-entity>
        <a-entity id="group-point3" scale="0 0 0">
          <a-image spot="linkto:#point2;spotgroup:group-point2" position="10 0 3"></a-image>
          <a-image spot="linkto:#point4;spotgroup:group-point4" position="-10 0 -3"></a-image>
        </a-entity>
        <a-entity id="group-point4" scale="0 0 0">
          <a-image spot="linkto:#point3;spotgroup:group-point3" position="0 0 -10"></a-image>
        </a-entity>
      </a-entity>
      
      <a-sky id="skybox" src="#point1"></a-sky>
        <a-camera id="camera1" position="0 1.6 0">
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
