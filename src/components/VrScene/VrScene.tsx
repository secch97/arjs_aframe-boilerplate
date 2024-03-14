import React from "react";
import "aframe";
import "ar.js";
import { Entity, Scene } from "aframe-react";

const VrScene = () => {
  return (
    <Scene
    renderer="antialias: true; logarithmicDepthBuffer: true; colorManagement: true; sortObjects: true;"
    >
              <Entity
          id="sphere" geometry="primitive: sphere"
          material="color: #EFEFEF; shader: flat"
          position="0 0 -3"
          light="type: point; intensity: 5"
          animation="property: position; easing: easeInOutQuad; dir: alternate; dur: 1000; to: 0 -0.10 -5; loop: true"
        ></Entity>
      <Entity
        gltf-model="https://arjs-aframe-boilerplate.vercel.app/table/scene.gltf"
        position="2 0 -5"
      />
    </Scene>
  );
};

export default VrScene;
