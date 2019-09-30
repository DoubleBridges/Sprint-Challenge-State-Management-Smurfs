import React from 'react'
import { Form } from 'semantic-ui-react'

const SearchBox = props => {

  const submitHandler = () => {
    props.submitSmurfForEdit(props.values.name)
  }

  return (
    <Form onSubmit={submitHandler}>
        <Form.Input
          fluid
          name='name'
          label="Enter Name"
          value={props.values.name}
          placeholder='Enter Name'
          onChange={props.handleChanges}
        />
        <Form.Button>Search Name</Form.Button>
    </Form>
  )
}

export default SearchBox