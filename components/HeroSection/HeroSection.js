import React from "react";
import classes from "./HeroSection.module.css";
import Image from "next/image";
import Router from "next/router";
import Link from "next/link";

const HeroSection = () => {

  const handleChange = () => {
    Router.push('/about');
  }

  return (
    <div className={classes.hero}>
      <div className={classes.heroSection}>
        <div className={classes.heroInformation}>
          <h1 className={classes.title}>
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className={classes.paragraph}>
            {" "}
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Link href="#">
            <button className={classes.cta} onClick={handleChange}>Learn More</button>
          </Link>
        </div>
        <div className={classes.heroImage}></div>
      </div>
    </div>
  );
};

export default HeroSection;
