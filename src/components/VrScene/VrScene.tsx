"use client";
import React from "react";

const VrScene = () => {
  return (
    <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: false;">
        <a-assets>
    <a-asset-item id="table" src="/table/scene.gltf"></a-asset-item>
  </a-assets>
      <a-marker type="pattern" url="/pattern-marker.patt">
      <a-gltf-model src="#table"></a-gltf-model>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default VrScene;
