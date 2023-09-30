import React, { useEffect, useState } from 'react'
import CommonSection from '../shared/CommonSection'
//import tourData from '../assets/data/tours'
import { Col, Container, Row } from 'reactstrap'
import SearchBar from '../shared/SearchBar'
import Newsletter from '../shared/Newsletter'
import TourCard from '../shared/TourCard'
import '../styles/tour.css'
import { BASE_URL } from '../utils/baseUrl'
import useFetch from '..//components/Hooks/useFetch'
const Tours = () => {
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)
  const {data:tourData,loading,error}=useFetch(`${BASE_URL}/tours?${page}`)
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`)
  useEffect(() => {
    const pages = Math.ceil(tourCount / 8)
    setPageCount(pages)
  },[page,tourCount])
  return (
    <>
      <CommonSection title={'All Tours'} />
      <section>
        <Container>
          <Row>
            <SearchBar/>
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          {
            loading && <h4>Loading....</h4>
          }
          {
            error && <h4>Error....</h4>
          }
           {!loading && ! error && <Row>
            {
              tourData?.map((tour, index) => (
                <Col lg='3' className='mb-4' key={index}>
                  <TourCard tour={tour}/>
                </Col>
              ))
            }
            <Col lg='12'>
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map(number => (
                  <span  key={number} className={page===number ? 'active__page' : ''} onClick={()=>setPage(number)}>
                    {number+1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>}  
        
        </Container>
      </section>
      <Newsletter/>
    </>
  )
}

export default Tours