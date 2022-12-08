const Text = ({ value, ...props }) => {
  return (
    <p className='general-text' {...props}>
      {value}
    </p>
  )
}

export { Text }
