import { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SignUpForm } from '../../forms/sign-up-form'
import { LoginForm } from '../../forms/login-form'

const LoginModal = ({ show, onHide }) => {
  const [isSignUp, setIsSignUp] = useState(true)

  const onSubmit = () => {
    console.log('Form submited')
  }

  const modalTitle = isSignUp ? 'Sign Up' : 'Login'
  return (
    <Modal
      backdrop='static'
      keyboard={false}
      show={show}
      onHide={onHide}
      animation={false}
      centered
    >
      <Modal.Header className='justify-content-md-center'>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{isSignUp ? <SignUpForm /> : <LoginForm />}</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={onHide}>
          Close
        </Button>
        <Button variant='primary'>Understood</Button>
      </Modal.Footer>
    </Modal>
  )
}

export { LoginModal }
