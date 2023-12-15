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
    <section id="contact">
      <h2>Me contacter</h2>
      <div className="container">
        <form ref={form} onSubmit={sendEmail} className="form">
          <input type="text" name="name" placeholder="Nom" required/>
          <input type="email" name="email" placeholder="Email" required/>
          <textarea name="message" placeholder="Message" required />
          <button className="close-button" type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
};