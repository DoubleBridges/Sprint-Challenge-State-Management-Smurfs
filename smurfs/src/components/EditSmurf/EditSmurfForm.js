import React, { useState, useContext } from 'react'
import { Divider, Segment, Grid } from 'semantic-ui-react'
import axios from 'axios'

import SearchBox from './SearchBox';
import EditBox from './EditBox';
import { SmurfContext } from '../../contexts/index';

const EditSmurfForm = () => {

  const [smurfs] = useContext(SmurfContext)

  const [smurf, setSmurf] = useState({});

  const submitSmurfForEdit = smurfForEdit => {
    setSmurf(smurfs.filter(smurf => smurf.name === smurfForEdit)[0])
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
            />
          </Grid.Column>
          <Grid.Column>
            <EditBox
              smurf={smurf}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    )
}

export default EditSmurfForm
