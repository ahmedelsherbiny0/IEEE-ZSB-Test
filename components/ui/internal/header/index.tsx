"use client";

import React from "react";
import FullHeader from "./full-header";
import SmallHeader from "./small-header";
import { useWindowType } from "@/hooks/use-window-type";

export default function Header() {
  const { isDesktop } = useWindowType();

  return <div>{isDesktop ? <FullHeader /> : <SmallHeader />}</div>;
}
