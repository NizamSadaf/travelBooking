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
                            <h1 className="mb-3 fw-semibold">About Us</h1>
                          <p className="mb-4" style={{textAlign:"justify",lineHeight:'2rem'}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cupiditate asperiores cumque optio voluptas sapiente, consequuntur blanditiis voluptatibus possimus ipsum nobis odio facere atque quis voluptatem repellendus consequatur sint minus error esse? Quaerat tempore nihil beatae fugit totam officiis, laborum, corrupti doloremque laudantium ab vel error temporibus obcaecati blanditiis earum sequi! Ea facilis consequatur facere fugit provident perspiciatis quia saepe at distinctio dolore repellat blanditiis officiis dolor aspernatur maxime fuga explicabo eos porro ab, laborum sit. Nobis vero, reprehenderit a quam asperiores placeat voluptatem sit, sunt, recusandae in modi. Voluptas, nulla incidunt soluta aspernatur ullam non dolorum minima eligendi harum?    
                        </p>
                      </div>
                      
                  </Col>
              </Row>
          </Container>      
    </section>
  )
}

export default ThankYou
