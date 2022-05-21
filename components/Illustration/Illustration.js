import React from "react";
import classes from "./Illustration.module.css";

const Illustration = () => {
  return (
    <>
      <div className={classes.backgroundImage}></div>
      <div className={classes.wrapper}>
        <div className={classes.layout}>
          <div>
            <div
              style={{ transform: "rotate(270deg)" }}
              className={classes.circle}
            ></div>
            <div className={classes.passionate}></div>
          </div>
          <div className={classes.illustration_info}>
            <h2 className={classes.header}>Passionate</h2>
            <p className={classes.info}>
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>
        </div>
        <div className={`${classes.layout} ${classes.resourceStyle}`}>
          <div>
            <div
              style={{ transform: "rotate(180deg)" }}
              className={classes.circle}
            ></div>
            <div className={classes.resourceful}></div>
          </div>
          <div className={classes.illustration_info}>
            <h2 className={classes.header}>Resourceful</h2>
            <p className={classes.info}>
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
        </div>
        <div className={classes.layout}>
          <div>
            <div
              style={{ transform: "rotate(0deg)" }}
              className={classes.circle}
            ></div>
            <div className={classes.friendly}></div>
          </div>
          <div className={classes.illustration_info}>
            <h2 className={classes.header}>Friendly</h2>
            <p className={classes.info}>
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Illustration;
