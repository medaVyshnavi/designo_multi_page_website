import React from "react";
import Link from "next/link";
import classes from "./Overlay.module.css";

const Overlay = () => {
  return (
    <div className={classes.overlay}>
      <div className={classes.navLinks}>
        <Link href="/about">OUR COMPANY</Link>
        <Link href="/location">LOCATIONS</Link>
        <Link href="/contact">CONTACT</Link>
      </div>
    </div>
  );
};

export default Overlay;
