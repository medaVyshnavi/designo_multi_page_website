import React from "react";
import Header from "../components/Header/Header";
import Head from "next/head";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Graphic from "../components/Design/Graphic";
import classes from "../components/Card/Card.module.css";
import WebSmall from "../components/Design/WebSmall";

const app = () => {
  const images = [
    {
      src: "/assets/app-design/desktop/image-airfilter.jpg",
      alt: "Airfilter",
      title: "Airfilter",
      info: "Solving the problem of poor indoor air quality by filtering the air",
    },
    {
      src: "assets/app-design/desktop/image-eyecam.jpg",
      alt: "Eyecam",
      title: "Eyecam",
      info: "Product that lets you edit your favorite photos and videos at any time",
    },
    {
      src: "/assets/app-design/desktop/image-faceit.jpg",
      alt: "Faceit",
      title: "Faceit",
      info: "Get to meet your favorite internet superstar with the faceit app",
    },
    {
      src: "assets/app-design/desktop/image-todo.jpg",
      alt: "Todo",
      title: "Todo",
      info: "A todo app that features cloud sync with light and dark mode",
    },
    {
      src: "/assets/app-design/desktop/image-loopstudios.jpg",
      alt: "Loopstudios",
      title: "Loopstudios",
      info: "A VR experience app made for Loopstudios",
    }
  ];

  return (
    <div>
      <Head>
        <title>App Design</title>
      </Head>
      <div className={classes.main_header}>
        <Header />
      </div>
      <Card
        title="App design"
        description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
        data={images}
      />
      <div className={classes.designStyle}>
        <WebSmall />
        <Graphic />
      </div>
      <Footer />
    </div>
  );
};

export default app;
