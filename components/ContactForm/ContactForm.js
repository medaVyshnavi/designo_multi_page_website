import React, { useState } from "react";
import classes from "./ContactForm.module.css";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [mailError, setEmailError] = useState(false);

  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const formSubmitHandler = async(e) => {
    setError(false)
    setEmailError(false)
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      setError(true);
    } else if (!email.match(regex)) {
      setEmailError(true);
      console.log("incorrect mail");
    } else {
      setError(false);
      const formData = {
        name:name,
        email:email,
        message:message
      }
      console.log("submitting form");
      
      // await fetch('/api/mail',{
      //   "method":'post',
      //   "headers": { "content-type": "application/json" },
      //   "body":JSON.stringify(formData)
      // })

      emailjs.sendForm('service_hi2j91f', 'template_m1f55ad', e.target, 'Nuh0SfyH1gwZ5Ht8A')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      console.log("form submitted");

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setError(false);
      setEmailError(false);
    }
  };

  return (
    <div className={classes.contact_wrapper}>
      <div className={classes.infoDiv}>
        <h1>Contact Us</h1>
        <p>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <form onSubmit={formSubmitHandler}className={classes.form}>
        {error ? (
          <p className={classes.error}>Fill the mandatory fields</p>
        ) : (
          ""
        )}
        {mailError ? (
          <p className={classes.error}>Please enter a valid Email</p>
        ) : (
          ""
        )}
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name*"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email Address*"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          placeholder="Your Message*"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default ContactForm;
