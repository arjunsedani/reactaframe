import React from 'react';
import scenegltf from "./scene.glb";

const AFRAME = window.AFRAME;


function EventHandling() {

  const handlePopoverOpen = event => {
   console.log('called this');
  };

  AFRAME.registerComponent('rotate-on-click', {
    
    schema: {
      rotation: {default: (0,90,0)},
      _animate: {type: 'boolean', default: false}
    },

    
    init: function () {
    
    },
    
    update: function() {
    
      var el = this.el;  // the model
      var defaultRotation = el.getAttribute('rotation');
      var button = document.querySelector("#rotateBtn"); //button object      
      var front = false;
      var rot = {x:0, y:0, z:0 }; 
      var animate = this.data._animate;
            

      button.addEventListener('click', function () {


      if(!animate){
        // rotates element without animation         
        if (front){
        rot= {x:0, y:0, z:0};
      } else {
        rot= {x:0, y:180, z:0};  
      }; 
        
        el.setAttribute('rotation', rot);
        front=!front;
      } else {

       el.emit('rotateModel'); //triggers animation component already on model
      }  
      });      
    }
    
  });


  return (
    <div className="App">
      <div className="cybertruck2"/>
        <h2>Use Effect</h2>
    <a-scene antialias="true" background="color: #555555">
      <a-entity light="type: ambient; intensity:2.8; color: #C8C8FF"></a-entity>
       <a-entity light="type: spot; intensity:.3; " position="1.1 2.7 1"></a-entity>
<a-entity line="start: 0, 1, 0; end: 2 0 -5; color: red"
          line__2="start: -2, 4, 5; end: 0 4 -3; color: green"></a-entity>
       
  <a-entity gltf-model={scenegltf} scale="0.1 0.1 0.1" position="0 1 -1" rotation="0 0 0" rotate-on-click="_animate: true;" >
    
  <a-animation id="objAnimation" attribute="rotation" dur="5000" fill="forwards" to="0 360 0"
                                    position="1 2 3" repeat="indefinite">
                                </a-animation>
    </a-entity>
    <a-plane id="rotateBtn" class="clickable" color="#CCC" height=".25" width=".75" position="1 1.5 -1.2">
      <a-entity text="align: center; anchor: center; value: ROTATE; color: black; wrap-count: 10;" onmouseover={handlePopoverOpen}></a-entity>
    </a-plane>
    <a-entity  id="controller" laser-controls custom-controls raycaster="objects: .clickable"></a-entity>
      <a-camera>
        <a-cursor raycaster="objects: .clickable"></a-cursor>
      </a-camera>

</a-scene>

    </div>
  );
}

export default  EventHandling;

