import React, { useContext } from 'react'
import { Container, Button, Row } from 'reactstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './header.css'
import { AuthContext } from '../../context/AuthContext'
const Header = () => {
  const navLink = [
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
  const navigate=useNavigate()
  const { dispatch, user } = useContext(AuthContext)
  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    localStorage.clear('user') 
    navigate('/')
  }
  return (
    <div>
      <Container>
        <Row>
          <div className="nav__link d-flex align-items-center justify-content-between p-3">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {
                  navLink.map((item,index) => (
                    <li key={index} className="nav__item">
                     <NavLink to={item.path} className={navclass=>navclass.isActive ? 'active__link' : ''}>{item.display}</NavLink></li>
                  ))
                }
              </ul>
            </div>
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
              {
                  user ? 
                    <>
                      <h5 className='mb-0'>{ user?.user?.username }</h5>
                      <Button className='btn btn-dark' onClick={logout}>Logout</Button>
                    </>
                    :
                    <>
                      <Button className='btn secondary__btn'><Link to={'/login'}>Login</Link></Button>
                      <Button className='btn primary__btn'><Link to={'/register'}>Register</Link></Button>
                    </>
              }
              </div>
              <span className='mobile__menu'>
                <i class="ri-bar-chart-horizontal-fill"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Header
