import React from "react";
import FooterBody from "./FooterBody";
import FooterPopup from "./FooterPopup";
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <FooterPopup />
      <FooterBody />
    </div>
  );
};

export default Footer;
