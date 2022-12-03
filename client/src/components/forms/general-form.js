import React from 'react'
import { Formik } from 'formik'
import { Button, Form } from 'react-bootstrap'

const GeneralForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  buttonTxt,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isValid }) => (
        <Form onSubmit={handleSubmit}>
          {children}
          <Button variant='primary' type='submit' disabled={!isValid}>
            {buttonTxt}
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export { GeneralForm }
