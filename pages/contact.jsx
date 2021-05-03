import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Page</title>
        <meta name="description" content="contact" />
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default ContactPage;
