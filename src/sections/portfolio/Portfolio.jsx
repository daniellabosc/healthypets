import "./portfolio.css";
import data from "./data";
import { Container, Row, Col } from "react-bootstrap";
import sample from "../../assets/portfolio/Bellmont_1.2fbca4118a9da60dbceb.png";
import ImageCarousel from "../../components/imagecarousel/ImageCarousel";

const Portfolio = () => {
  let imageSrc;
  return (
    <section id="portfolio">
      <Container className="portfolio__main">
        <Row>
          {data.map((item) => {
            imageSrc = require(`../../assets/portfolio/${item}`);
            return (
              <Col lg={4} key={item} className="portfolio__item">
                <img src={imageSrc} alt={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
