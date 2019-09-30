import React, { useEffect, createContext, useState} from 'react'
import axios from 'axios'

export const SmurfContext = createContext()

export const SmurfProvider = props => {
  const [smurfs, setSmurfs] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3333/smurfs`)
      .then(res => {
        setSmurfs(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <SmurfContext.Provider value={[smurfs, setSmurfs]}>{props.children}</SmurfContext.Provider>
  )
}