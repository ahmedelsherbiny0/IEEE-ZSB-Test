"use client";

import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import SmallHeaderLinks from "./small-header-links";
import { useAtom } from "jotai";
import { SmallHeaderAtom } from "../../../app/atoms/atoms";
import { ColorModeButton } from "@/components/ui/color-mode";

type SideNavBarProps = {
  toggleRef: React.RefObject<HTMLDivElement | null>;
};

export default function SideNavBar({ toggleRef }: SideNavBarProps) {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useAtom(SmallHeaderAtom);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);

    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && navRef.current.contains(event.target as Node))
        return;
      if (toggleRef.current && toggleRef.current.contains(event.target as Node))
        return;
      setIsOpen(false);
      localStorage.setItem("SmallHeaderAtom", "false");
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen, toggleRef]);

  if (!isClient) return null;

  return (
    <motion.div
      ref={navRef}
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 500 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="z-50 flex justify-center fixed top-28 left-0 right-0 w-11/12 mx-auto p-5 rounded-2xl bg-opacity-90 shadow-lg border border-white/20 bg-white/30 backdrop-blur-lg"
    >
      <div className="absolute right-7 hover:opacity-90 transition-all duration-200 ease-in-out">
        <ColorModeButton />
      </div>
      <SmallHeaderLinks />
    </motion.div>
  );
}
