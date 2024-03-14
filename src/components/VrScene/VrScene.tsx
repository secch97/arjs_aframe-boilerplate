import React from "react";
import "aframe";
import "ar.js";
import { Entity, Scene } from "aframe-react";

const VrScene = () => {
  return (
    <Scene vr-mode-ui="enabled: false">
      {/* <a-assets>
        <a-asset-item id="bulbasaur" src="/table/bulbasaur.glb"></a-asset-item>
      </a-assets> */}
      <Entity
        gltf-model="https://arjs-aframe-boilerplate.vercel.app/table/scene.gltf"
        position="2 0 -5"
      />
    </Scene>
  );
};

export default VrScene;
