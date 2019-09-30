import React, { useContext } from 'react'
import { Card, Button } from 'semantic-ui-react'
import axios from 'axios'
import { SmurfContext } from '../contexts'

const Smurf = props => {

  const [smurfs, setSmurfs] = useContext(SmurfContext)

  const deleteSmurf = () => {
    axios.delete(`http://localhost:3333/smurfs/${props.id}`)
      .then(res => setSmurfs(res.data))
      .catch(err => console.log(`axios.delete`, err))
  }

  const meta = (
    <ul>
      <li>{`Age: ${props.age}`}</li>
      <li>{`Height: ${props.height}`}</li>
    </ul>
  )

  const extra = (
    <Button
      onClick={deleteSmurf}
    >Delete Smurf</Button>
  )

  return (
    <Card
      header={props.name}
      meta={meta}
      extra={extra}
    />

  )
}

export default Smurf