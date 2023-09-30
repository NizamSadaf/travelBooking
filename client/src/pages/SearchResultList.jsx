import React,{useState} from 'react'
import { Container, Col, Row } from 'reactstrap'
import {useLocation} from 'react-router-dom'
import TourCard from '../shared/TourCard'
import CommonSection from '../shared/CommonSection'
const SearchResultList = () => {
  const location = useLocation()
  const [data] = useState(location.state)
  console.log(data)
  return (
    <div>
      <CommonSection title={'All Searched Tour'} />
      <section>
        <Container>
        <Col>
          <Row>
            {
              data?.length == 0 ? <h4>No Tour Found</h4> :
                data?.map((tour) => (
                  <Col lg='3' className="mb-4" key={tour._id}>
                      <TourCard tour={ tour } />
                  </Col>
              ))
            }

          </Row>
        </Col>
      </Container>
      </section>
    </div>
  )
}

export default SearchResultList