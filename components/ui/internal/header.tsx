"use client";

import React, { useState, useEffect } from "react";
import FullHeader from "./full-header";
import SmallHeader from "./small-header";

export default function Header() {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window == "undefined") return;
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{windowWidth >= 1250 ? <FullHeader /> : <SmallHeader />}</div>;
}
