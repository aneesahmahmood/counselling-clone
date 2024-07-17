import React from "react";
import { Drawer as AntDrawer } from "antd";
import Link from "next/link";

import "./Drawer.css";

function Drawer({ onClose, open }) {
  return (
    <>
      <AntDrawer onClose={onClose} open={open}>
        <ul className="drawer-list">
          <li className="drawer-item">
            <Link href="/">Home</Link>
          </li>
          <li className="drawer-item">
            <Link href="/about"> About Me</Link>
          </li>
          <li className="drawer-item">
            <Link href="/services">Services</Link>
          </li>
          <li className="drawer-item">
            <Link href="/FAQs">FAQs</Link>
          </li>
          <li className="drawer-item">
            <button className="nav-button">
              <Link href="/contact">Say Hello</Link>
            </button>
          </li>
        </ul>
      </AntDrawer>
    </>
  );
}

export default Drawer;
