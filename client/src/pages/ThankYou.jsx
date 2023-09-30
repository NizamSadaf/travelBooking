import React from 'react'
import '../styles/thank-you.css'
import { Container,Col,Row, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
const ThankYou = () => {
  return (
    <section>
          <Container>
              <Row>
                  <Col lg='12' className='pt-5 text-center'>
                      <div className="thank__you">
                            <span><i class="ri-checkbox-circle-line"></i></span>
                            <h1 className="mb-3 fw-semibold">Thank You</h1>
                            <h3 className="mb-4">We'll Call you soon to confirm your booking</h3>
                            <Link to={'/home'}>
                                <Button className='btn primary__btn w-25'>
                                    Back To Home 
                                </Button>
                            </Link>
                      </div>
                      
                  </Col>
              </Row>
          </Container>      
    </section>
  )
}

export default ThankYou
