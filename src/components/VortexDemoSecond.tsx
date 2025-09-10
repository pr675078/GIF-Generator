import React from "react";
import { Vortex } from "../components/vortex";
import Navbar from "./Navbar";
import Random from "./Random";
import Tag from "./Tag";

export function VortexDemoSecond() {
  return (
    <div className="w-full mx-auto h-screen relative z-0 bg-black overflow-x-hidden">
      <Navbar />
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex flex-col items-center justify-center px-2 md:px-10 py-4 w-full h-full gap-10"
      >
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center">
          <Random />
          <Tag />
        </div>
      </Vortex>
    </div>
  );
}
