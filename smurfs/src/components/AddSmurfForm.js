import React, { useContext, } from 'react'
import { Form } from 'semantic-ui-react'
import axios from 'axios'

import { useForm } from '../hooks/useForm';
import { SmurfContext } from '../contexts/index';

const AddSmurfForm = () => {

  const [smurfs, setSmurfs] = useContext(SmurfContext)

  const submitHandler = () => {
    console.log(`submitHandler`, values)
  
    axios.post(`http://localhost:3333/smurfs`, values)
      .then(res => setSmurfs(res.data))
      .catch(err => console.log(err))

    resetForm()
  }

  const [values, handleChanges, resetForm] = useForm(
    {
      name: '',
      age: '',
      height: ''
  }
)

  return (
    <Form onSubmit={submitHandler}>
      <h1>Add a Smurf</h1>
      <Form.Group widths='equal'>
        <Form.Input
          fluid
          name='name'
          label='Name'
          value={values.name}
          placeholder='Name'
          onChange={handleChanges}
        />
        <Form.Input
          fluid
          name='age'
          label='Age'
          value={values.age}
          placeholder='Age'
          onChange={handleChanges}
        />
        <Form.Input
          fluid
          name='height'
          label='Height'
          value={values.height}
          placeholder='Height in cm'
          onChange={handleChanges}
        />
      </Form.Group>
      <Form.Button>Add Smurf</Form.Button>
    </Form>
  )
}

export default AddSmurfForm