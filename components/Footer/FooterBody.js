import Image from "next/image";
import React from "react";
import classes from "./Footer.module.css";
import Facebook from "../../public/assets/shared/desktop/icon-facebook.svg";
import Instagram from "../../public/assets/shared/desktop/icon-instagram.svg";
import Youtube from "../../public/assets/shared/desktop/icon-youtube.svg";
import Pinterest from "../../public/assets/shared/desktop/icon-pinterest.svg";
import Twitter from "../../public/assets/shared/desktop/icon-twitter.svg";
import Link from "next/link";

const FooterBody = () => {
  return (
    <div className={classes.base}>
      <div className={classes.top}>
        <div className={classes.footerLogo}>
          <div className={classes.logoImage}></div>
          <Link href='/'><h1 className={classes.title}>DESIGNO</h1></Link>
        </div>
        <div>
          <hr className={classes.break} />
          <div className={classes.links}>
            <Link href="/about">OUR COMPANY</Link>
            <Link href="/location">LOCATIONS</Link>
            <Link href="/contact">CONTACT</Link>
          </div>
        </div>
      </div>
      <hr className={classes.breakTablet} />
      <div className={classes.bottom}>
          <div className={classes.address}>
            <h4>Designo Central Office</h4>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div className={classes.contact}>
            <h4>Contact Us (Central Office)</h4>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
        <div className={classes.contact_icons}>
          <div className={classes.icons}>
            {" "}
            <Image src={Facebook} alt="facebook" width="24px" height="24px" />
          </div>

          <div className={classes.icons}>
            {" "}
            <Image src={Youtube} alt="youtube" width="24px" height="24px" />
          </div>
          <div className={classes.icons}>
            {" "}
            <Image src={Twitter} alt="twitter" width="24px" height="24px" />
          </div>
          <div className={classes.icons}>
            {" "}
            <Image src={Pinterest} alt="pintrest" width="24px" height="24px" />
          </div>
          <div className={classes.icons}>
            {" "}
            <Image src={Instagram} alt="instagram" width="24px" height="24px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBody;
