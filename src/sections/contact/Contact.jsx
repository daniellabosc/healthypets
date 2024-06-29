import "./contact.css";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "../../components/contactform/ContactForm";
import Consultation from "../../components/consultation/Consultation";
const Contact = () => {
  return (
    <section id="contact" className="contact__main">
      <div>
        <Container className="contact__inner">
          <h2>Contact Us</h2>
          <Row>
            <Col lg={6} sm={12}>
              <ContactForm />
            </Col>
            <Col className="consultation">
              <Consultation />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Contact;
