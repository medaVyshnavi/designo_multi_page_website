import React from "react";
import classes from "./Card.module.css";

const Card = ({ data, title, description }) => {
  return (
    <div className={classes.card_wrapper}>
      <div className={classes.header}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={classes.Img_gallery}>
        {data.map((item) => (
          <div className={classes.sub_card}>
            <img className={classes.sub_card_img} src={item.src} alt={item.alt} width="327px" height="320px" />
            <div className={classes.sub_card_info}>
              <h2>{item.title}</h2>
              <p>{item.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
