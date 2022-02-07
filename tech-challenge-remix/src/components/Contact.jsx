import React from "react";
import { fetchNewMessage } from "../services/api";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await fetchNewMessage( data );
    } catch (e) {
      alert(e);
    } finally {
      alert(
        "Merci pour votre sollicitation. Une réponse vous sera adressée personellement dès que possible à l'adresse mail indiquée."
      );
    }
  };


  return (
    <div>
      <h1 className="contactTitle">
        Pour toute question ou réclamation à l'attention de la famille royale,
        <br />
        veuillez remplir le formulaire ci-dessous:
      </h1>

      <section className="contact">
        <span>
          <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
            <label for="name">Nom:</label>
            <br />
            <input
              {...register("name", { required: true })}
              type="text"
              id="name"
              name="name"
            />
            <br />
            <label for="email">Email:</label>
            <br />
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              name="email"
            />
            <br />
            <label for="message">Message:</label>
            <br />
            <textarea
              {...register("message", { required: true })}
              id="message"
              name="message"
            ></textarea>
            <br />
            <br />
            <button type="submit">
              ok
              </button>
          </form>
        </span>
      </section>

      <p class="contactFormEnd">
        Votre requête sera consultée par le Roi Aeetes, <br />
        qui vous remercie de votre implication dans la vie du Royaume. <br />
      </p>
    </div>
  );
};

export default Contact;
