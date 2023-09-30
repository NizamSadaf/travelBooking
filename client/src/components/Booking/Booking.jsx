import React, { useState,useContext } from 'react'
import './booking.css'
import { Form,FormGroup,ListGroup,ListGroupItem,Button } from 'reactstrap'
import calculateAvgRating from '../../utils/avgRating'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../utils/baseUrl'
import { AuthContext } from '../../context/AuthContext'
import BaseComponent from 'bootstrap/js/dist/base-component'
const token = JSON.parse(localStorage.getItem('user'))?.token
const Booking = ({ tour,avgRating }) => {
    //const { avgRating } = calculateAvgRating(reviews)
    const { user } = useContext(AuthContext)
    console.log(user)
    const { price, reviews,title } = tour
    const navigate=useNavigate()
    const [booking, setBooking] = useState({
        userId:user?.user._id,
        fullName: user?.user.username,
        tourName:title,
        phone: 1,
        userEmail:user?.user.email,
        bookingAt:"",
        guestSize:0
    })
    const handleChange = (e) => {
        setBooking({...booking,[e.target.id]:e.target.value})
    }
    const handleClick = async(e) => {
        e.preventDefault()
        if (!user || user === null || user === undefined)
        {
            alert ("Please Sign In")
        }
        else {
            if (booking.fullname === "") {
                alert("Please Enter Your Name")
            }
            else if (booking.phone === 1) {
                alert("Please Enter Mobile Number")
            }
            else if (booking.bookingAt === "") {
                alert("Please Enter Booking Data")
            }
            else if (booking.guestSize === 0) {
                alert("Please Enter Guest Number")
            }
            else{
            try {
            const res = await fetch(`${BASE_URL}/booking`, {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                Authentication: `Bearer ${token}` 
                    
            },
            
            body:JSON.stringify(booking)
        })
        const resutl=await res.json()
        navigate('/thank-you')
            }
            catch (err) {
            alert(err.message)
                }
            }
        }
    }
    const serviceFee = 10
    const totalWithoutServiceFee = Number(booking.guestSize) * Number(price)
    const totalWithtServiceFee = totalWithoutServiceFee + serviceFee
    const personNumber=Number(booking.guestSize)===0 ? 1 : Number(booking.guestSize)
  return (
    <div className='booking'>
          <div className="booking__top d-flex align-items-center justify-content-between">
              <h3>
                  ${price} <span>/per person</span>
              </h3>
              <span className='tour__rating d-flex align-items-center'>
                  <i class="ri-star-s-fill"></i>
                  {avgRating>0?avgRating:''}({reviews?.length})
              </span>
          </div>
          {/* === Booking Form === */}
          <div className="booking__form">
              <h5>Information</h5>
              <Form className='booking__info-form' >
                  <FormGroup>
                      <input type="text" placeholder='Full Name' id='fullname' onChange={handleChange} required />
                  </FormGroup>
                  <FormGroup>
                        <input type="number" placeholder='Phone' id='phone' required onChange={handleChange} />
                  </FormGroup>
                  <FormGroup className='d-flex align-items-center gap-3'>
                        <input type="date" placeholder='' id='bookingAt' required onChange={handleChange} />
                        <input type="number" placeholder='Guest' id='guestSize' required onChange={handleChange} />
                  </FormGroup>
              </Form>
          </div>
          {/* === Booking Form End === */}
          {/* ======Booking Bottom======= */}
          <div className="booking__bottom">
              <ListGroup>
                  <ListGroupItem className='border-0 px-0'>
                      <h5 className="d-flex align-items-center gap-1">
                          ${price} <i class='ri-close-line'></i>{personNumber} person
                      </h5>
                      <span>${ totalWithoutServiceFee }</span>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 px-0'>
                     <h5>
                          Service Charge
                      </h5>
                      <span>${ serviceFee }</span>
                  </ListGroupItem>
                  <ListGroupItem className='border-0 px-0 total'>
                      <h5>
                          Total
                      </h5>
                      <span>${totalWithtServiceFee}</span>
                  </ListGroupItem>
              </ListGroup>
              <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
          </div>
          {/* ======Booking Bottom End======= */}
    </div>
  )
}

export default Booking
