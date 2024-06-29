import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../assets/stock-photo-relaxed-domestic-cat-at-home-indoor-1085627801.jpg";
import Image2 from "../../assets/stock-photo-cute-cat-lying-on-back-with-paws-up-on-colored-background-relaxed-and-happy-indoor-cat-with-paws-2166406331.jpg";

function ImageCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={Image1} alt="example image" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image2} alt="example image" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Image1} alt="example image" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;
