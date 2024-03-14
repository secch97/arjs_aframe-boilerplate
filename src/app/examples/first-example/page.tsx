'use client';

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DynamicVrScene = dynamic(() => import('../../../components/VrScene/VrScene'), {
  ssr: false,
})

function FirstExamplePage() {
  return (
    <>
      <DynamicVrScene></DynamicVrScene>
    </>
  );
}

export default FirstExamplePage;
