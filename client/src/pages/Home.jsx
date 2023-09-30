import React from 'react'
import '../styles/home.css'
import { Container, Col, Row } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import worldImg from '../assets/images/world.png'
import heroVideo from '../assets/images/hero-video.mp4'
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/FeaturedTours/FeaturedTourList'
import MasonryImageGallery from '../components/Image-gallery/MasonryImageGallery'
import Testimonial from '../components/Testimonial/Testimonial'
import Newsletter from '../shared/Newsletter'
const Home = () => {
  return (
    <>
      {/* =====hero section start */}
      <section>
        <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"Know Before You Go"} />
                <img src={worldImg} alt='' />
              </div>
              <h1>
                Traveling Opens the door to create {" "}
                <span className='highlight'>memories</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nemo tempora nobis amet fugit, laborum fuga porro non corrupti perferendis omnis odit dignissimos iure consectetur reprehenderit voluptas accusamus quisquam rerum modi explicabo deserunt. Distinctio, sint? Voluptatem repellat tenetur nisi molestiae.
              </p>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="" srcset="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <video src={heroVideo} alt="" controls/>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" srcset="" />
            </div>
          </Col>
          <SearchBar/>
        </Row>
      </Container>
      </section>
      {/* =====hero section end */}
      
      {/* ==services section start */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle">What we serve</h5>
              <h5 className="services__title">We offer our best services</h5>
            </Col>
            <ServiceList/>
          </Row>
        </Container>
      </section>
      {/* ==services section end */}
      
      {/* ==featured tour section start */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'} />
              <h2 className="featured__tour-title">Our Featured Tours</h2>
            </Col>
            <FeaturedTourList/>
        </Row>
        </Container>
      </section>
      {/* ==== featured tour section end ===== */}

      {/* ==== experience section start ===== */}
      <section>
        <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={"Experience"} />
              <h2>
                With our all experience <br /> we serve you
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="content__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12K+</span>
                <h6>Succesfull trip</h6>
             </div>
              <div className="counter__box">
                <span>15K+</span>
                <h6>Client Reviews</h6>
             </div>
              <div className="counter__box">
                <span>12K+</span>
                <h6>Succesfull trip</h6>
             </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" srcset="" />
            </div>
          </Col>
        </Row>
      </Container>
      </section>
      {/* ==== experience section end ===== */}

      {/* ==== gallery section start ===== */}
      <section>
        <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'} />
            <h2>
              Visit our customer tour gallery
            </h2>
          </Col>
        </Row>
        <Col lg='12'>
          <MasonryImageGallery/>
        </Col>
      </Container>
      </section>
      {/* ==== gallery section end ===== */}

      {/* ==== testimonial section start ===== */}
      <Container className='testimonial__section'>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={"Fans Love"} />
            <h2 className='testimonial__title'>
              What our friends say about us
            </h2>
          </Col>
          <Col lg='12'>
            <Testimonial/>
          </Col>
        </Row>
      </Container>
      {/* ==== testimonial section end ===== */}
      <Newsletter/>
    </>
  )
}

export default Home