"use client";

import React, { useState } from "react";
import { Fraunces } from "next/font/google";
import Link from "next/link";

import NavElements from "./components/navElements/NavElements";
import Drawer from "./components/drawer/Drawer";

import "./Navbar.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const titleOneClassName = `${fraunces.className} header-text1`;
  const titleTwoClassName = `${fraunces.className} header-text2`;
  const navElementsClass = `${fraunces.className} navbar`;

  return (
    <>
      <div className="main-header">
        <header className="header">
          <Link href="/" className={titleOneClassName}>
            <span>Ghazala Aziz&nbsp;</span>
          </Link>

          <Link href="/" className={titleTwoClassName}>
            <span> Counselling</span>
          </Link>
        </header>
        <NavElements className={navElementsClass} openDrawer={openDrawer} />
      </div>
      <Drawer onClose={closeDrawer} open={isDrawerOpen} />
    </>
  );
};

export default Navbar;
