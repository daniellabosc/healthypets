import "./hero.css";
import { Container, Row, Col } from "react-bootstrap";
import HeroCat from "../../assets/shutterstock_181282691.jpg";
const Hero = () => {
  return (
    <section id="hero" className="hero__main">
      <Container>
        <Row>
          <Col lg={6} sm={12}>
            <div className="hero__img">
              <img src={HeroCat} alt="hero image" />
            </div>
          </Col>
          <Col lg={6} sm={12}>
            <div className="hero__text">
              <h2>Elevate Your Business with a Tailored Web Presence.</h2>
              <h5 className="txt-optional">
                Crafting captivating designs and strategic branding, we'll build
                a unique website that highlights your veterinarian practice or
                animal services business, engaging your audience and fostering
                meaningful connections.
              </h5>
              <h4 className="hero__bottomtitle">
                We make it easy for you so you can go back to caring for{" "}
                <i>them</i>.
              </h4>
              <a href="#contact" className="btn btn-secondary btn-lg">
                Free Consultation
              </a>
              <p class="mt-2">
                20 years experience building software for the web.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
