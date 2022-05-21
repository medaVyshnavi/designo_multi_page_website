import React from "react";
import Head from "next/head";
import ContactForm from "../components/ContactForm/ContactForm";
import Header from "../components/Header/Header";
import Country from "../components/Countries/Country";
import classes from "../components/ContactForm/ContactForm.module.css";
import ContactFooter from "../components/Footer/ContactFooter";

const contact = () => {
  return (
    <div>
      <Head>
        <title>App Design</title>
      </Head>
      <Header />
      <ContactForm />
      <div className={classes.country_style}>
        <Country />
      </div>
      <div className={classes.footer_wrapper}>
      <ContactFooter/>
      </div>
    </div>
  );
};

export default contact;
