import { useState, useEffect } from "react";
import fotopribadi from "../../assets/foto_pribadi-removebg-preview.png";
export default function RightHome() {
  return (
    <div className=" flex items-center justify-center">
      <div id="container">
        <div id="circle" className="relative w-sm h-100 slide-in-right">
          <div
            id="picture"
            className="absolute inset-0 rounded-full bg-neutral-600 scale-110 overflow-hidden max-sm:scale-70"
          >
            <img
              src={fotopribadi}
              alt="gambar foto pribadi"
              className="relative  w-xs h-full object-cover rounded-full left-10 top-10 overflow-visible grayscale hover:grayscale-0  transition duration-700 fade-in"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
