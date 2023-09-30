import React, { useRef } from 'react'
import {Col,Form,FormGroup} from 'reactstrap'
import './search-bar.css'
import { useNavigate } from 'react-router-dom'
import {BASE_URL} from '../utils/baseUrl'
const SearchBar = () => {
    const navigate=useNavigate()
    const locationRef= useRef('') 
    const distanceRef= useRef(0) 
    const maxGroupSizeRef = useRef(0)
    const searchHandler = async () => {
        const location=locationRef.current.value
        const distance=distanceRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value
        if (location === '' || distance === 0 || maxGroupSize === 0)
        {
            alert("All fileds are required!!")
        }
        const goTo = `${BASE_URL}/tours/search/getTourBySearch?city=${location}&maxGroupSize=${maxGroupSize}&distance=${distance}`
        const res = await fetch(goTo)
        const result = await res.json()
        navigate('/searchresultlist',{state:result.data})
    }
  return (
      <Col lg='12'>
          <div className="search__bar">
              <Form className='d-flex align-items-center gap-1'>
                  <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                      <span>
                          <i class="ri-map-pin-line"></i>
                      </span> 
                      <div>
                          <h6>Location</h6>
                          <input type='text' placeholder='Where are you going?' ref={locationRef}/>
                      </div>
                  </FormGroup>
                  <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                      <span>
                          <i class="ri-map-pin-time-line"></i>
                      </span> 
                      <div>
                          <h6>Distance</h6>
                          <input type='number' placeholder='Distance k/m' ref={distanceRef}/>
                      </div>
                  </FormGroup>
                  <FormGroup className='d-flex gap-3 form__group'>
                      <span>
                         <i class="ri-group-line"></i>
                      </span> 
                      <div>
                          <h6>Max People</h6>
                          <input type='number' placeholder='0' ref={maxGroupSizeRef}/>
                      </div>
                  </FormGroup>
                  <span className='search__icon' type='submit' onClick={searchHandler}>
                      <i class="ri-search-line"></i>
                  </span>
              </Form>
          </div>
      </Col>
  )
}

export default SearchBar
