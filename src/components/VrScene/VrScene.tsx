import React, { useEffect, useState } from "react";
import "aframe";
import "ar.js";
import { Entity, Scene } from "aframe-react";

const VrScene = () => {
    const [xrReady, setXrReady] = useState(false);

    useEffect(() => {
      const watchWindow = setInterval(() => {
        if (window.AFRAME) {
          console.log('XR8 ready watcher');
          setXrReady(true);
          clearInterval(watchWindow);
        } else {
          console.log('loading watcher');
        }
      }, 1000);
    }, []);
  
    if (xrReady) {
      return (
        <Scene
          xrextras-tap-recenter
          xrextras-almost-there
          xrextras-loading=""
          xrextras-runtime-error
          xrextras-gesture-detector
          xrweb
        >
          <Entity
            primitive="a-light"
            light="
              type: directional; 
              castShadow: true; 
              color: white; 
              intensity: 0.5"
            position="5 10 7"
          />
  
          <Entity primitive="a-camera" position="0 2 2" />
  
          <Entity
            primitive="a-box"
            xrextras-one-finger-rotate=""
            position="0 0.5 0"
            material="
              color: #AD50FF; shader: flat; 
              src: https://cdn.8thwall.com/web/assets/cube-texture.png"
            shadow
          />
  
          <Entity
            primitive="a-plane"
            height="2000"
            width="2000"
            rotation="-90 0 0"
            material="shader: shadow; opacity: 0.67"
            shadow
          />
        </Scene>
      );
    } else {
      return null;
    }  

};

export default VrScene;
