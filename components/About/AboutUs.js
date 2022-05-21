import React from "react";
import Country from "../Countries/Country";
import classes from "./About.module.css";

const AboutUs = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.about}>
        <div className={classes.aboutImage}></div>
        <div className={classes.about_us}>
          <div className={classes.bg_circle}></div>
          <h2>About Us</h2>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients' audiences.
          </p>
        </div>
      </div>
      <div className={classes.leafTop}></div>
      <div className={classes.talent}>
        <div className={classes.talentImage}></div>
        <div className={classes.information}>
          <h2>World-class talent</h2>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <br />
          <p>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>
      <Country />
      <div className={classes.leafBottom}></div>
      <div className={classes.realdeal}>
        <div className={classes.realDealImage}></div>
        <div
          className={`${classes.information} ${classes.realStyle}`}
        >
          <h2>The real deal</h2>
          <p>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <br />
          <p>
            {" "}
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
