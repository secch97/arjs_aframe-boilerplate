"use client";
import React from "react";

const VrScene = () => {
  return (
    <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: false;">
        <a-assets>
    <a-asset-item id="table" src="/table/scene.gltf"></a-asset-item>
  </a-assets>
      {/* <a-marker type="pattern" url="/pattern-marker.patt">
      </a-marker> */}
      <a-gltf-model position="0 2 -5" scale="0.5 0.5 0.5" src="#table"></a-gltf-model>
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default VrScene;
