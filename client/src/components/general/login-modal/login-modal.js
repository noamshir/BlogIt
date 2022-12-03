import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

import { SignUpForm } from '../../forms/sign-up-form'
import { LoginForm } from '../../forms/login-form'

const LoginModal = ({ show, onHide }) => {
  const [isSignUp, setIsSignUp] = useState(true)

  const toggleModalType = () => {
    setIsSignUp(!isSignUp)
  }

  const renderFooterContent = () => {
    const questionText = isSignUp ? 'Already have an account? ' : 'No account? '
    const actionText = isSignUp ? 'Sign in' : 'Create one'
    return (
      <p className='login-modal-footer-text'>
        {questionText} <span onClick={toggleModalType}>{actionText}</span>
      </p>
    )
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
      className='login-modal'
    >
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isSignUp ? (
          <SignUpForm closeModal={onHide} />
        ) : (
          <LoginForm closeModal={onHide} />
        )}
      </Modal.Body>
      <Modal.Footer className='justify-content-center'>
        {renderFooterContent()}
      </Modal.Footer>
    </Modal>
  )
}

export { LoginModal }
