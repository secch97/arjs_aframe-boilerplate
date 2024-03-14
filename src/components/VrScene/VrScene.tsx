import React from "react";
import "aframe";
import "ar.js";
import { Entity, Scene } from "aframe-react";

const VrScene = () => {
  return (
    <Scene
    vr-mode-ui="enabled: false;"
    renderer="logarithmicDepthBuffer: true;"
    embedded
    arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
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
        <Entity primitive="a-camera">
          {/* <Entity primitive="a-cursor" animation__click={{ property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150 }} /> */}
        </Entity>
    </Scene>
  );
};

export default VrScene;
