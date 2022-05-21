import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "../../public/assets/shared/mobile/icon-hamburger.svg";
import CloseIcon from "../../public/assets/shared/mobile/icon-close.svg";
import classes from "./Header.module.css";
import Overlay from "../Overlay/Overlay";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={classes.navBar}>
        <div className={classes.header}>
          <div className={classes.logo}>
            <div className={classes.logoImage}></div>
            <Link href="/">
              <h1 className={classes.title}>DESIGNO</h1>
            </Link>
          </div>
          <div className={classes.navigation}>
            <div className={classes.navLinks}>
              <Link href="/about">OUR COMPANY</Link>
              <Link href="/location">LOCATIONS</Link>
              <Link href="/contact">CONTACT</Link>
            </div>
            {isMenuOpen ? (
              <>
                <Image
                  onClick={openMenuHandler}
                  className={classes.menuIcon}
                  src={CloseIcon}
                  width="24px"
                  height="20px"
                  alt="hamberger-menu"
                />
                <Overlay />
              </>
            ) : (
              <Image
                onClick={openMenuHandler}
                className={classes.menuIcon}
                src={HamburgerMenu}
                width="24px"
                height="20px"
                alt="hamberger-menu"
              />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
