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

{/* <a-assets>
          <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg" alt="Ground Texture" />
          <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg" alt="Sky Texture" />
        </a-assets>
        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100" />
        <Entity primitive="a-light" type="ambient" color="#445451" />
        <Entity primitive="a-light" type="point" intensity="2" position="2 4 4" />
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048" />
        <Entity text={{ value: 'Hello, A-Frame React!', align: 'center' }} position={{ x: 0, y: 2, z: -1 }} /> */}
      <Entity
        gltf-model="https://arjs-aframe-boilerplate.vercel.app/table/scene.gltf"
        position="2 1 -5"
      />
          <Entity
        gltf-model="https://arjs-aframe-boilerplate.vercel.app/table/scene.gltf"
        position="1 2 -5"
      />
          <Entity
        gltf-model="https://arjs-aframe-boilerplate.vercel.app/table/scene.gltf"
        position="3 3 -5"
      />
        <Entity primitive="a-camera">
          {/* <Entity primitive="a-cursor" animation__click={{ property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150 }} /> */}
        </Entity>
    </Scene>
  );
};

export default VrScene;
