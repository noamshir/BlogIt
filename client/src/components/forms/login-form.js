import { Formik } from 'formik'
import * as yup from 'yup'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { TextField } from './text-field'

const LoginForm = () => {
  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(12).required(),
  })

  const onSubmit = () => {
    console.log('Logged in!')
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

export { LoginForm }
