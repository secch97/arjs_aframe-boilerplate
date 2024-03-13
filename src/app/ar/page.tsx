"use client"
import 'aframe';
import { Entity, Scene } from 'aframe-react';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'ar.js';


function ARpage() {

    return (
        <>
            <Scene vr-mode-ui="enabled: false">
                <a-assets>
                    <a-asset-item
                        id="bulbasaur"
                        src="/bulbasaur.glb"
                    ></a-asset-item>
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
