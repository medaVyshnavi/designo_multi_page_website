import React from "react";
import classes from "./LocationCard.module.css";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../Map/Map"),
  { ssr: false }
);

const LocationDesktop = () => {
  return (
    <div className={classes.desktop_wrapper}>
      <div className={classes.divOne}>
        <div className={classes.data}>
          <h2>Canada</h2>
          <div className={classes.desktop_info}>
            <div>
              <p>
                <b>Designo Central Office</b>
              </p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div>
              <p>
                <b>Contact</b>
              </p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </div>
        </div>
        <DynamicComponentWithNoSSR center={[43.64398522377883, -79.39459304675783]}/>
        {/* <img src="/assets/locations/desktop/image-map-canada.png" alt="canada map" width="375px" height="326px" /> */}
      </div>
      <div className={classes.divTwo}>
        {/* <img
          src="/assets/locations/desktop/image-map-australia.png"
          alt="autralia map"
          width="375px"
          height="326px"
        /> */}
        <DynamicComponentWithNoSSR center={[-30.324096059873686, 149.78556101071447]}/>
        <div className={classes.data} style={{marginLeft:'2rem' , marginRight:'0'}}>
          <h2>Australia</h2>
          <div className={classes.desktop_info}>
            <div>
              <p>
                <b>Designo AU Office</b>
              </p>
              <p>19 Balonne Street</p>
              <p>New South Wales 2443</p>
            </div>
            <div>
              <p>
                <b>Contact</b>
              </p>
              <p>P : (02) 6720 9092</p>
              <p>M : contact@designo.au</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.divThree}>
        <div className={classes.data}>
          <h2 style={{margin:'0 5.4rem 1.5rem'}}>United Kingdom</h2>
          <div className={classes.desktop_info}>
            <div>
              <p>
                <b>Designo UK Office</b>
              </p>
              <p>13 Colorado Way</p>
              <p>Rhyd-y-fro SA8 9GA</p>
            </div>
            <div>
              <p>
                <b>Contact</b>
              </p>
              <p>P : 078 3115 1400</p>
              <p>M : contact@designo.uk</p>
            </div>
          </div>
        </div>
        <DynamicComponentWithNoSSR center={[53.710060490978506, -1.3420096944421636]}/>
        {/* <img
          src="./assets/locations/desktop/image-map-united-kingdom.png"
          alt="uk map"
          width="375px"
          height="326px"
        /> */}
      </div>
    </div>
  );
};
export default LocationDesktop;
