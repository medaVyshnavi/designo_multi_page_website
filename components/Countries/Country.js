import React from "react";
import Image from "next/image";
import Canada from "../../public/assets/shared/desktop/illustration-canada.svg";
import Australia from "../../public/assets/shared/desktop/illustration-australia.svg";
import UK from "../../public/assets/shared/desktop/illustration-united-kingdom.svg";
import classes from "./Country.module.css";
import Link from 'next/link'

// /_next/static/media/illustration-canada.49f846ce.svg

const Country = () => {
  return (
    <div className={classes.country_wrapper}>
      <div className={classes.card}>
        <div
          className={classes.cardImage}
          styel={{ transform: "rotate(0deg)", left: "16rem" }}
        ></div>
        <div>
          <Image src={Canada} alt="canada" />
          <h3 className={classes.name}>CANADA</h3>
          <Link href="/location"><button>SEE LOCATION</button></Link>
        </div>
      </div>
      <div className={classes.card}>
        <div
          className={`${classes.cardImage} ${classes.australiaBg}`}
          style={{ transform: "rotate(270deg)"}}
        ></div>
        <div>
          <Image src={Australia} alt="australia" />
          <h3 className={classes.name}>AUSTRALIA</h3>
          <Link href="/location"><button>SEE LOCATION</button></Link>
        </div>
      </div>
      <div className={classes.card}>
        <div
          className={`${classes.cardImage} ${classes.ukBg}`}
          style={{ transform: "rotate(180deg)" }}
        ></div>
        <div>
          <Image src={UK} alt="uk" />
          <h3 className={classes.name}>UNITED KINGDOM</h3>
          <Link href="/location"><button>SEE LOCATION</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Country;
