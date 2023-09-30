import React from 'react'
import { useEffect } from 'react'
import TourCard from '../../shared/TourCard'
import { Col } from 'reactstrap'
// import tourData from '../../assets/data/tours'
import  useFetch  from '../Hooks/useFetch'
import {BASE_URL} from '../../utils/baseUrl'
const FeaturedTourList = () => {
    const { data: tourData, loading, error } = useFetch(`${BASE_URL}/tours`)
return (
      <>
          {
              loading && <h4>Loading....</h4>
          }
          {
              error && <h4>{error}</h4>
          }
          {
              !loading && !error &&
              tourData?.map((tour) => (
                  <Col lg='3' key={tour.id}>
                      <TourCard tour={ tour } />
                  </Col>
              ))
          }
      </>
  )
}

export default FeaturedTourList
