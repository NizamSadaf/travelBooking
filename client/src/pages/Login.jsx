import React,{useState,useContext} from 'react'
import '../styles/login.css'
import { Container, Col, Row, Form, FormGroup, Button } from 'reactstrap'
import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'
import { Link,useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import {BASE_URL} from '../utils/baseUrl'
const Login = () => {
  const navigate=useNavigate()
  const [credentials, setCredentials] = useState({
    email: undefined,
    password:undefined
  })
  const {dispatch}=useContext(AuthContext)
  const handleChange = (e) => {
    e.preventDefault()
    setCredentials({ ...credentials, [e.target.id]: e.target.value })
    }
    const handleClick =async (e) => {
      e.preventDefault()
      dispatch({type:'LOGIN_START'})
      try {
        const res = await fetch(`${BASE_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'content-type':'application/json'
          },
          credentials:'include',
          body:JSON.stringify(credentials)
        })
        const result = await res.json()
        console.log(result.data.token)
        dispatch({ type: 'LOGIN_SUCCESS', payload: result.data })
        navigate('/')
      } catch (err) {
        dispatch({ type: 'LOGIN_FAILURE',payload:err })
      }
    }
    
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="" srcset="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="email" placeholder='Email' id='email' onChange={handleChange} required />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder='Password' id='password' onChange={handleChange} required />
                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
                </Form>
                <p>Don't have an account <Link to={'/register'}>Create</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login