"use client";
import "aframe";
import "ar.js";
import { Entity, Scene } from "aframe-react";
import React, { useEffect, useState } from "react";

function ARpage() {

    useEffect(() => {
        const initAFrame = async () => {
            // Dynamically import 'aframe'
            const AFrame = await import('aframe');
            // You can use AFrame here
            console.log(AFrame);
        }
        initAFrame();
    }, []);

    useEffect(() => {
        const initARJS = async () => {
            // Dynamically import 'ar.js'
            const ARJS = await import('ar.js');
            // You can use ARJS here
            console.log(ARJS);
        }
        initARJS();
    }, []);
  return (
    <>
      <Scene vr-mode-ui="enabled: false">
        <a-assets>
          <a-asset-item id="bulbasaur" src="/bulbasaur.glb"></a-asset-item>
        </a-assets>
        <Entity
          gltf-model="#bulbasaur"
          scale={{ x: 0.75, y: 0.75, z: 0.75 }}
          position={{ x: 0, y: 0, z: -5 }}
        />
      </Scene>
    </>
  );
}

export default ARpage;
