import {Carousel} from "react-bootstrap";
import hero1 from './../assets/1.png';
import hero2 from './../assets/2.png';
import hero3 from './../assets/3.png';
// eslint-disable-next-line no-unused-vars
import css from './../assets/Hero.css';

const Hero = () => {
    return (
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 ImgCarousel"
              src={hero1}
              alt="First slide"
              
            />
            <Carousel.Caption>
              <h3>Belanja Mudah</h3>
              <p>Nikmati Belanja kebutuhan pasar dengan cepat.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100 ImgCarousel"
              src={hero2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Belanja Mudah</h3>
              <p>Anti ribet hanya dengan duduk dirumah.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 ImgCarousel"
              src={hero3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Belanja Mudah</h3>
              <p>
                Tersedia berbagai macam pembayaran.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}

export default Hero;