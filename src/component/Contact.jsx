import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <h1>Contact Us</h1>
        <p>
          We’re here to help! Contact us with any question and we will do our
          best to reply as soon as we can.{" "}
        </p>

        <h1>General Office:</h1>
        <p>
          Room 3607, Startup Zone, Lift 29-30, Academic Building, Hong Kong
          University of Science and Technology, Clear Water Bay, Kowloon, Hong
          Kong SAR
        </p>

        <h1>Mailing address:</h1>
        <p>
          G/F, 114A, Tai Po Tsai Village, Clear Water Bay, Sai Kung, HK, SAR
        </p>

        <p>+852 55352203 (Mon - Fri, 8 am - 7 pm) </p>

        <p>alphaenergyiot@gmail.com</p>
      </div>
      <div>
        <h1> Let's get in touch!</h1>

        <form action={search}>
          <p>Name</p>
          <input name="name" />

          <p>Email</p>

          <input name="name" placeholder="name@example.com" />

          <p>Message</p>

          <input name="name" placeholder="type here" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
