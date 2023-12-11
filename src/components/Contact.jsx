import React, { useRef } from "react";
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_scakqbp", "template_543m4oa", form.current, "QFUwpYiiHkPRPqK5x").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="container">
      <form ref={form} onSubmit={sendEmail} className="form">
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};