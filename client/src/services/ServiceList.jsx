import React from 'react'
import ServiceCard from './ServiceCard'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
import { Col } from 'reactstrap'

const serviceData = [
    {
        imgUrl: weatherImg,
        title: "Calculate weather",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, perspiciatis?'
    },
    {
        imgUrl: guideImg,
        title: "Calculate weather",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, perspiciatis?'
    },
    {
        imgUrl: customizationImg,
        title: "Calculate weather",
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, perspiciatis?'
    },
]

const ServiceList = () => {
  return (
      <>
          {
              serviceData.map((item,index) => (
                  <Col lg='3' key={index}><ServiceCard item={item}/></Col>
              ))
          }
      </>
  )
}

export default ServiceList
