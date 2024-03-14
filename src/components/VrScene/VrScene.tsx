"use client";
import React from "react";
import "aframe";
import "ar.js";
import { Entity, Scene } from "aframe-react";

const VrScene = () => {
  return (
    <a-scene
      vr-mode-ui="enabled: false"
      arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false"
      renderer="antialias: true; alpha: true"
    >
      <a-box position="0 0 0" material="opacity: 1;"></a-box>
      <a-marker-camera preset="hiro"></a-marker-camera>
    </a-scene>
  );
};

export default VrScene;
