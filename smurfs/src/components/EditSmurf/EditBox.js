import React, { useContext } from 'react'
import { Form, Label } from 'semantic-ui-react'
import axios from 'axios'

import { SmurfContext } from '../../contexts/index';

const EditBox = props => {

  const [smurfs, setSmurfs] = useContext(SmurfContext)

  const submitHandler = () => {
  
    axios.put(`http://localhost:3333/smurfs/${props.smurf.id}`, props.smurf)
      .then(res => setSmurfs(res.data))
      .catch(err => console.log(err))
    props.resetForm()
  }

  return (
    <Form onSubmit={submitHandler}>
      <Label
        content={props.smurf.name || "Name"}
      />
      <Form.Input
        fluid
        name='age'
        label='Age'
        value={props.smurf.age || ''}
        placeholder='Age'
        onChange={props.handleChanges}
      />
      <Form.Input
        fluid
        name='height'
        label='Height'
        value={props.smurf.height || ''}
        placeholder='Height in cm'
        onChange={props.handleChanges}
      />
      <Form.Button>Submit Changes</Form.Button>
    </Form>
  )
}

export default EditBox
