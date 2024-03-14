"use client";
import React from "react";

const VrScene = () => {
  return (
    <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: false;">
      <a-marker type="pattern" url="/pattern-marker.patt">
        <a-plane
          id="imagePlane"
          position="0 0 -1.8"
          rotation="-90 0 0"
          width="1"
          height="1"
          material="shader: flat; scale: 1 1 1; src:/ctd.png"
        >
        </a-plane>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default VrScene;
