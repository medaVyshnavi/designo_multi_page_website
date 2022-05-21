import Link from "next/link";
import React from "react";
import classes from "./Footer.module.css";
import Router from 'next/router'

const FooterPopup = () => {

  const handleChange = () => {
    Router.push('/contact')
  }

  return (
    <div className={classes.layout}>
      <div className={classes.data}>
        <h2>Let’s talk about your project</h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <Link href="#">
        <button onClick={handleChange}>Get in Touch</button>
      </Link>
    </div>
  );
};

export default FooterPopup;
