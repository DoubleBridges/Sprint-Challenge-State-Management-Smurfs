import React, { useContext } from 'react'
import { Card, Segment } from 'semantic-ui-react'
import Smurf from './Smurf';
import { SmurfContext } from '../contexts/index';

const SmurfList = () => {

  const [smurfs] = useContext(SmurfContext)

  const smurfList = smurfs.map(smurf => {
    return (
      <Smurf
        id={smurf.id}
        key={smurf.id}
        name={smurf.name}
        age={smurf.age}
        height={smurf.height}
      />
    )
  })

  return (
    <Segment>
      <h1>Smurf Village</h1>    
      <Card.Group itemsPerRow={4}>
        {smurfList}
      </Card.Group>
    </Segment>
  )
}

export default SmurfList
