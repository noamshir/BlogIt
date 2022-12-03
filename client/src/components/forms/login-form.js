import * as yup from 'yup'
import React from 'react'
import { TextField } from './text-field'
import { GeneralForm } from './general-form'

const LoginForm = ({ closeModal }) => {
  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(12).required(),
  })

  const initialValues = { firstName: '', lastName: '', email: '', password: '' }

  const onSubmit = (values) => {
    console.log('Logged in!')
    closeModal()
  }

  return (
    <GeneralForm
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}
      buttonTxt='Login'
    >
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

export { LoginForm }
