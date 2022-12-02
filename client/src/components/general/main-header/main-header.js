import { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

import { Logo } from '../logo'
import { LoginModal } from '../login-modal'

const MainHeader = () => {
  const [activeKey, setActiveKey] = useState('/')
  const [showModal, setModalState] = useState(false)

  const toggleModal = () => {
    setModalState(!showModal)
  }

  return (
    <Navbar bg='dark' variant='dark' className=''>
      <Container className='main-header-container main-layout' fluid>
        <Navbar.Brand href='/' className='logo-and-name-container flex aic'>
          <Logo />
          <h1 className='siteName'>
            Blog<span className='it-span'>IT</span>
          </h1>
        </Navbar.Brand>
        <Nav activeKey={activeKey} className='flex aic'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/create'>Create your own</Nav.Link>
          <Nav.Item>
            <Button variant='primary' size='sm' onClick={toggleModal}>
              JOIN
            </Button>
          </Nav.Item>
        </Nav>
      </Container>
      <LoginModal show={showModal} onHide={toggleModal} />
    </Navbar>
  )
}

export { MainHeader }
