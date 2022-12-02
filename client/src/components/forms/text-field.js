import React from 'react'
import { Field } from 'formik'
import { Form } from 'react-bootstrap'

const TextField = ({
  fieldId,
  label,
  type = 'text',
  placeholder,
  controlId,
}) => {
  return (
    <Field name={fieldId}>
      {({ field, meta }) => (
        <Form.Group className='mb-3' controlId={controlId}>
          <Form.Label>{label}</Form.Label>
          <Form.Control
            {...field}
            type={type}
            placeholder={placeholder}
            isValid={meta.touched && !meta.error}
            isInvalid={meta.touched && meta.error}
            feedback={meta.error}
          />
          <Form.Control.Feedback type='invalid'>
            {meta.error}
          </Form.Control.Feedback>
        </Form.Group>
      )}
    </Field>
  )
}

export { TextField }
