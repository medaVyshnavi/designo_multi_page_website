import React from "react";
import Router from "next/router";
import Link from "next/link";
import Image from "next/image";
import Arrow from "../../public/assets/shared/desktop/icon-right-arrow.svg";
import classes from "./Design.module.css";

const Web = () => {
  return (
    <div className={classes.card}>
      <div className={classes.web_img}></div>
      <div className={`${classes.details} ${classes.webDetails}`}>
        <h3 className={classes.title}>WEB DESIGN</h3>
        <p className={classes.para}>
          <Link href="#">
            <a onClick={() => Router.push("/web")}>VIEW PROJECTS </a>
          </Link>
          <span style={{ paddingLeft: "0.3rem" }}>
            <Image src={Arrow} alt="arrow icon" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Web;
