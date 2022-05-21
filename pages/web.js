import React from "react";
import Header from "../components/Header/Header";
import Head from "next/head";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import App from "../components/Design/App";
import Graphic from "../components/Design/Graphic";
import classes from "../components/Card/Card.module.css";

const webDesign = () => {
  const images = [
    {
      src: "/assets/web-design/desktop/image-express.jpg",
      alt: "Express",
      title: "Express",
      info: "A multi-carrier shipping website for ecommerce businesses",
    },
    {
      src: "assets/web-design/desktop/image-transfer.jpg",
      alt: "Transfer",
      title: "Transfer",
      info: "Site for low-cost money transfers and sending money within seconds",
    },
    {
      src: "/assets/web-design/desktop/image-photon.jpg",
      alt: "Photon",
      title: "Photon",
      info: "A state-of-the-art music player with high-resolution audio and DSP effects",
    },
    {
      src: "assets/web-design/desktop/image-builder.jpg",
      alt: "Builder",
      title: "Builder",
      info: "Connects users with local contractors based on their location",
    },
    {
      src: "/assets/web-design/desktop/image-blogr.jpg",
      alt: "Blogr",
      title: "Blogr",
      info: "Blogr is a platform for creating an online blog or publication",
    },
    {
      src: "assets/web-design/desktop/image-camp.jpg",
      alt: "Camp",
      title: "Camp",
      info: "Get expert training in coding, data, design, and digital marketing",
    },
  ];

  return (
    <div>
      <Head>
        <title>Web Design</title>
      </Head>
      <div className={classes.main_header}>
        <Header />
      </div>
      <Card
        title="Web Design"
        description="We build websites that serve as powerful marketing tools and bring memorable brand experiences"
        data={images}
      />

      <div className={classes.designStyle}>
        <App />
        <Graphic />
      </div>
      <Footer />
    </div>
  );
};

export default webDesign;
