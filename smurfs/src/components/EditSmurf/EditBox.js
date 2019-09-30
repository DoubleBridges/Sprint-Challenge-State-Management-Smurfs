import React, { useContext } from 'react'
import { Form, Label } from 'semantic-ui-react'
import axios from 'axios'

import { useForm } from '../../hooks/useForm';
import { SmurfContext } from '../../contexts/index';

const EditBox = props => {

  const [smurfs, setSmurfs] = useContext(SmurfContext)

  const submitHandler = () => {
    console.log(`EditBox: submitHandler`, values)
  
    axios.put(`http://localhost:3333/smurfs/${values.id}`, values)
      .then(res => setSmurfs(res.data))
      .catch(err => console.log(err))
    resetForm()
  }

  const [values, handleChanges, resetForm] = useForm(props.smurf)

  console.log(`EditBox: props, props.smurf, and values:`, props, props.smurf, values)

  return (
    <Form onSubmit={submitHandler}>
      <Label
        content={values.name || "Name"}
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
      <Form.Button>Submit Changes</Form.Button>
    </Form>
  )
}

export default EditBox
