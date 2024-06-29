import "./contactform.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import Form from "react-bootstrap/Form";
import AlertBlock from "../alertblock/AlertBlock";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wr84j4i",
        "template_sd37cxs",
        e.target,
        "yL2ifwBy4PYzHX2Ot"
      )
      .then(
        () => {
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
            window.location.reload();
          }, 3000);
        },
        (err) => {
          console.log(JSON.stringify(err));
        }
      );
  };
  return (
    <div className="contact-form__main">
      {isSubmitted && (
        <AlertBlock text="Thanks! Someone will be in touch shortly." />
      )}
      <Form onSubmit={handleSubmit} id="form">
        <Form.Group className="mb-3">
          <Form.Label htmlFor="company">Company Name</Form.Label>
          <Form.Control id="company" name="company" type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="contact">Contact Name</Form.Label>
          <Form.Control
            id="contact_name"
            name="contact_name"
            type="text"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control type="email" name="email" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="contact_type">
            How would you like to receive your website analysis?
          </Form.Label>
          <Form.Select name="contact_type" aria-label="select zoom or email">
            <option>Please select</option>
            <option value="zoom">Zoom Call 30 mins</option>
            <option value="email">Email me the results</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="desc">
            Is there anything else you want to tell us?
          </Form.Label>
          <Form.Control as="textarea" name="desc" rows={3} />
        </Form.Group>
        <input
          type="submit"
          className="btn btn-secondary btn-lg"
          id="button"
          value="Connect"
        />
      </Form>
    </div>
  );
};

export default ContactForm;
