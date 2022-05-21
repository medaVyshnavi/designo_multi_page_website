import React from "react";
import classes from "./LocationCard.module.css";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../Map/Map"),
  { ssr: false }
);

const LocationCard = ({ data }) => {
  return (
    <div className={classes.miniScreen}>
      <div>
        {data.map((item) => (
          <div className={classes.location_sub_card}>
            {/* <img
              className={classes.location_sub_card_img}
              src={item.src}
              alt={item.alt}
            /> */}

            <div className={classes.location_sub_card_info}>
              <h2>{item.country_Name}</h2>
              <div className={classes.display_style}>
                <div className={classes.location}>
                  <p>
                    <b>{item.office_name}</b>
                  </p>
                  <p>{item.address}</p>
                  <p className={classes.address}>{item.country}</p>
                </div>
                <div className={classes.contact}>
                  <p>
                    <b>Contact</b>
                  </p>
                  <p>{item.phone}</p>
                  <p>{item.mail}</p>
                </div>
              </div>
            </div>
            <DynamicComponentWithNoSSR center={item.center}/>
          </div>
        ))}
      </div>
    </div>
  );
};
export default LocationCard;
