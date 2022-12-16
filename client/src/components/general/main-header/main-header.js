import { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { Offcanvas } from 'react-bootstrap'

import { Logo } from '../logo'
import { LoginModal } from '../login-modal'

const LogoAndAppName = () => {
  return (
    <div className='logo-and-name-container flex aic'>
      <Logo />
      <h1 className='siteName'>
        Blog<span className='it-span'>IT</span>
      </h1>
    </div>
  )
}

const MainHeader = () => {
  const [activeKey, setActiveKey] = useState('/')
  const [showModal, setModalState] = useState(false)

  const toggleModal = () => {
    setModalState(!showModal)
  }

  return (
    <Navbar bg='dark' variant='dark' expand='md' className='sticky'>
      <Container className='main-header-container'>
        <Navbar.Brand href='/'>
          <LogoAndAppName />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement='end'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              activeKey={activeKey}
              className='justify-content-end flex-grow-1 pe-3 main-header-nav'
            >
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/create'>Create your own</Nav.Link>
              <Nav.Item className='join-nav-item'>
                <Button variant='primary' size='sm' onClick={toggleModal}>
                  JOIN
                </Button>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
      <LoginModal show={showModal} onHide={toggleModal} />
    </Navbar>
  )
}

export { MainHeader, LogoAndAppName }
