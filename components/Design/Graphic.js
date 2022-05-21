import React from "react";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import Arrow from "../../public/assets/shared/desktop/icon-right-arrow.svg";
import classes from "./Design.module.css";

const Graphic = () => {
  const changePage = () => {
    Router.push("/graphic");
  };
  return (
    <div className={classes.card}>
      <div className={classes.graphic_img}></div>
      <div className={classes.details}>
        <h3 className={classes.title}>GRAPHIC DESIGN</h3>
        <p className={classes.para}>
          <Link href="#">
            <a onClick={changePage}> VIEW PROJECTS </a>
          </Link>

          <span style={{ paddingLeft: "0.3rem" }}>
            <Image src={Arrow} alt="arrow icon" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Graphic;
