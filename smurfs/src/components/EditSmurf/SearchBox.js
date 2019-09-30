import React from 'react'
import { Form } from 'semantic-ui-react'

import { useForm } from '../../hooks/useForm'

const SearchBox = props => {

  const [values, handleChanges, resetForm] = useForm({ name: '' })

  const submitHandler = () => {
    props.submitSmurfForEdit(values.name)
    console.log(`SearchBox: submitHandler:`, values.name)
    resetForm()
  }

  return (
    <Form onSubmit={submitHandler}>
        <Form.Input
          fluid
          name='name'
          label="Enter Name"
          value={values.name}
          placeholder='Enter Name'
          onChange={handleChanges}
        />
        <Form.Button>Search Name</Form.Button>
    </Form>
  )
}

export default SearchBox