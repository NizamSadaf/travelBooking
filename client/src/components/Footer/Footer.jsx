import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
const quickLinks01 = [
    {
      path: '/home',
      display:'Home'
    },
    {
      path: '/tours',
      display:'Tours'
    },
    {
      path: '/about',
      display:'About'
    },
]
  const quickLinks02 = [
    {
      path: '/gallery',
      display:'Gallery'
    },
    {
      path: '/login',
      display:'Login'
    },
    {
      path: '/registration',
      display:'Registration'
    },
]
  const year =new Date().getFullYear()
const Footer = () => {
  return (
    <Container className='footer'>
      <Row>
        <Col lg='3'>
          <div className='logo'>
            <img src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, accusantium?
            </p>
            <div className="social__links d-flex align-items-center gap-4">
              <span>
                <Link to={'#'}>
                  <i class="ri-youtube-fill"></i>
                </Link>
              </span>
              <span>
                <Link to={'#'}>
                 <i class="ri-facebook-fill"></i>
                </Link>
              </span>
              <span>
                <Link to={'#'}>
                  <i class="ri-github-fill"></i>
                </Link>
              </span>
              <span>
                <Link to={'#'}>
                  <i class="ri-linkedin-box-fill"></i>
                </Link>
              </span>
            </div>
          </div>
        </Col>
        <Col lg='3'>
          <h5 className="footer__link-title">Discover</h5>
            <ListGroup className='footer__quick-links'>
              {
                quickLinks01.map((link,index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={link.path}>
                      {link.display}
                    </Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
        </Col>
        <Col lg='3'>
          <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className='footer__quick-links'>
              {
                quickLinks02.map((link,index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={link.path}>
                      {link.display}
                    </Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
        </Col>
        <Col lg='3'>
          <h5 className="footer__link-title">Contact</h5>
            <ListGroup className='footer__quick-links'>
              
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i class="ri-map-pin-line"></i></span>
                  Address:
                </h6>
                <p className='mb-0'>Dhaka,Banglades</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i class="ri-mail-line"></i></span>
                  Email:
                </h6>
                <p className='mb-0'>nizamsadaf1460@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i class="ri-phone-line"></i></span>
                  Phone:
                </h6>
                <p className='mb-0'>+8801913771385</p>
              </ListGroupItem>
            </ListGroup>
        </Col>
        <Col lg='12'>
          <p className='copyright'>
            Copyright {year}, Design and Developed by Nizam
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer