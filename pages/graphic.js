import React from "react";
import Header from "../components/Header/Header";
import Head from "next/head";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import App from "../components/Design/App";
import WebSmall from "../components/Design/WebSmall";
import classes from "../components/Card/Card.module.css";

const graphic = () => {
  const images = [
    {
      src: "/assets/graphic-design/desktop/image-change.jpg",
      alt: "‘Change’",
      title: "Tim Brown",
      info: "A book cover designed for Tim Brown’s new release, ‘Change’",
    },
    {
      src: "assets/graphic-design/desktop/image-boxed-water.jpg",
      alt: "Boxed water",
      title: "Boxed water",
      info: "A simple packaging concept made for Boxed Water",
    },
    {
      src: "/assets/graphic-design/desktop/image-science.jpg",
      alt: "Science!",
      title: "Science!",
      info: "A poster made in collaboration with the Federal Art Project",
    },
  ];

  return (
    <div>
      <Head>
        <title>Graphic Design</title>
      </Head>
      <div className={classes.main_header}>
        <Header />
      </div>
      <Card
        title="Graphic design"
        description="We deliver eye-catching branding materials that are tailored to meet your business objectives."
        data={images}
      />
      <div className={classes.designStyle}>
        <WebSmall />
        <App />
      </div>
      <Footer />
    </div>
  );
};

export default graphic;
