"use client";
import { useEffect } from "react";
import loadingPace from "@/common/loadingPace";

function LoadingScreen() {
  useEffect(() => {
    setTimeout(() => {
      if (typeof Pace !== "undefined") loadingPace();
    }, 1000);
  });

  return (
    <div className="hideX">
      <div className="loading">
        <span>R</span>
        <span>e</span>
        <span>s</span>
        <span>p</span>
        <span>e</span>
        <span>c</span>
        <span>t</span>
        <span>C</span>
        <span>l</span>
        <span>u</span>
        <span>b</span>
      </div>
      <div id="preloader"></div>
    </div>
  );
}

export default LoadingScreen;
