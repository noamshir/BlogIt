import * as yup from 'yup'
import { Col, Row } from 'react-bootstrap'

import { GeneralForm } from './general-form'
import { TextField } from './text-field'

const SignUpForm = ({ closeModal }) => {
  const initialValues = { firstName: '', lastName: '', email: '', password: '' }

  const schema = yup.object({
    firstName: yup.string().min(2).max(15).required(),
    lastName: yup.string().min(2).max(15).required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(12).required(),
  })

  const onSubmit = (values) => {
    console.log('Done!')
    closeModal()
  }

  return (
    <GeneralForm
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
      buttonTxt='Sign Up'
    >
      <Row>
        <Col sm={6}>
          <TextField
            fieldId='firstName'
            label='First Name'
            type='text'
            placeholder='Enter First Name'
            controlId='formBasicFirstName'
          />
        </Col>
        <Col sm={6}>
          <TextField
            fieldId='lastName'
            label='Last Name'
            type='text'
            placeholder='Enter Last Name'
            controlId='formBasicLastName'
          />
        </Col>
      </Row>

      <TextField
        fieldId='email'
        label='Email address'
        type='email'
        placeholder='Enter email'
        controlId='formBasicEmail'
      />
      <TextField
        fieldId='password'
        label='Password'
        type='text'
        placeholder='Password'
        controlId='formBasicPassword'
      />
    </GeneralForm>
  )
}

export { SignUpForm }
