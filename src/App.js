import React from 'react';

function App() {

  return (
    <div className="App">
    <a-scene antialias="true" background="color: #555555" stats>
      <a-entity light="type: ambient; intensity:2.8; color: #C8C8FF"></a-entity>
       <a-entity light="type: spot; intensity:.3; " position="1.1 2.7 1"></a-entity>
<a-entity line="start: 0, 1, 0; end: 2 0 -5; color: red"
          line__2="start: -2, 4, 5; end: 0 4 -3; color: green"></a-entity>
       
  <a-entity gltf-model="scene.gltf" scale="0.1 0.1 0.1" position="0 1 -1" rotation="0 0 0" rotate-on-click="_animate: true;" >
    
       <a-animation 
                    begin="rotateModel"
                    attribute="rotation"
                    dur="1000"
                    direction="alternate"
                    to="0 180 0"
               ></a-animation>
    </a-entity>
    <a-plane id="rotateBtn" class="clickable" color="#CCC" height=".25" width=".75" position="1 1.5 -1.2">
      <a-entity text="align: center; anchor: center; value: ROTATE; color: black; wrap-count: 10;"></a-entity>
    </a-plane>
    <a-entity  id="controller" laser-controls custom-controls raycaster="objects: .clickable"></a-entity>
      <a-camera>
        <a-cursor raycaster="objects: .clickable"></a-cursor>
      </a-camera>

</a-scene>

    </div>
  );
}

export default App;
