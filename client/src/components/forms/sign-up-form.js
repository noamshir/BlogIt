import { Formik } from 'formik'
import * as yup from 'yup'
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { TextField } from './text-field'

const SignUpForm = () => {
  const schema = yup.object({
    firstName: yup.string().min(2).max(15).required(),
    lastName: yup.string().min(2).max(15).required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(12).required(),
  })

  const onSubmit = () => {
    console.log('Done!')
  }

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <Form>
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

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Formik>
  )
}

export { SignUpForm }
