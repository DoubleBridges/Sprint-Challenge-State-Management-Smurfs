import React, { useContext } from 'react'
import { Divider, Segment, Grid } from 'semantic-ui-react'

import SearchBox from './SearchBox';
import EditBox from './EditBox';
import { SmurfContext } from '../../contexts/index';
import { useForm } from '../../hooks/useForm';

const EditSmurfForm = () => {

  const [smurfs] = useContext(SmurfContext)

  const [values, handleChanges, resetForm, setValues] = useForm({})

  const submitSmurfForEdit = smurfForEdit => {
    setValues(smurfs.filter(smurf => smurf.name === smurfForEdit)[0])
  }

  return (
    <Segment>
      <h1>Edit a Smurf</h1>
      <Grid columns={2} stackable textAlign='center'>
        <Divider vertical>then</Divider>  
        <Grid.Row verticalAlign='middle'>
          <Grid.Column>
            <SearchBox
              submitSmurfForEdit={submitSmurfForEdit}
              handleChanges={handleChanges}
              values={values}
            />
          </Grid.Column>
          <Grid.Column>
            <EditBox
              smurf={values}
              handleChanges={handleChanges}
              resetForm={resetForm}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    )
}

export default EditSmurfForm
